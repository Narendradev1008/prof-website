import { useEffect, useState } from "react";
import {
  DEFAULT_STATISTICS,
  getStatistics,
  updateStatistics,
} from "../lib/statistics";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import {
  getDocumentPdfUrl,
  PDF_DOCUMENTS,
  uploadDocumentPdf,
} from "../lib/documents";

const ADMIN_EMAIL = "mam@eed.svnit.ac.in";

function Admin() {
  const [session, setSession] = useState(null);
  const [statistics, setStatistics] = useState(DEFAULT_STATISTICS);
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingDocument, setUploadingDocument] = useState(null);
  const [message, setMessage] = useState("");
  const [documentMessages, setDocumentMessages] = useState({});

  const isAdmin = session?.user?.email?.toLowerCase() === ADMIN_EMAIL;

  useEffect(() => {
    if (!supabase) {
      return undefined;
    }

    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setIsLoading(false);
    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!isAdmin) {
      return;
    }

    const loadStatistics = async () => {
      try {
        setStatistics(await getStatistics());
      } catch (error) {
        setMessage(`Could not load statistics: ${error.message}`);
      }
    };

    loadStatistics();
  }, [isAdmin]);

  const handleSignIn = async (event) => {
    event.preventDefault();
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setMessage(error.message);
    }
  };

  const handleStatisticChange = (key, field, value) => {
    setStatistics((currentStatistics) =>
      currentStatistics.map((statistic) =>
        statistic.key === key ? { ...statistic, [field]: value } : statistic,
      ),
    );
  };

  const handleSave = async (event) => {
    event.preventDefault();

    if (statistics.some((statistic) => !statistic.value.trim() || !statistic.label.trim())) {
      setMessage("Each value and label is required.");
      return;
    }

    setIsSaving(true);
    setMessage("");

    try {
      await updateStatistics(statistics);
      setMessage("Statistics saved successfully.");
    } catch (error) {
      setMessage(`Could not save statistics: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setMessage("");
    setDocumentMessages({});
  };

  const handleDocumentUpload = (document) => async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const file = form.elements.pdf.files?.[0];

    if (!file) {
      setDocumentMessages((currentMessages) => ({
        ...currentMessages,
        [document.key]: "Choose a PDF before uploading.",
      }));
      return;
    }

    setUploadingDocument(document.key);
    setDocumentMessages((currentMessages) => ({
      ...currentMessages,
      [document.key]: "",
    }));

    try {
      await uploadDocumentPdf(document.key, file);
      form.reset();
      setDocumentMessages((currentMessages) => ({
        ...currentMessages,
        [document.key]: `${document.title} PDF uploaded successfully. It is now available on the public page.`,
      }));
    } catch (error) {
      setDocumentMessages((currentMessages) => ({
        ...currentMessages,
        [document.key]: `Could not upload the PDF: ${error.message}`,
      }));
    } finally {
      setUploadingDocument(null);
    }
  };

  if (!isSupabaseConfigured) {
    return <SetupRequired />;
  }

  if (isLoading) {
    return <PageShell><p className="text-slate-600">Checking sign-in status...</p></PageShell>;
  }

  if (session && !isAdmin) {
    return (
      <PageShell>
        <p className="text-lg font-semibold text-red-700">This account is not an administrator.</p>
        <button className="lab-button mt-6" onClick={handleSignOut}>
          Sign out
        </button>
      </PageShell>
    );
  }

  if (!isAdmin) {
    return (
      <PageShell>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Administrator access</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Edit site statistics</h1>
        <form className="mt-8 space-y-5" onSubmit={handleSignIn}>
          <Field label="Email" type="email" value={email} onChange={setEmail} />
          <Field label="Password" type="password" value={password} onChange={setPassword} />
          <button className="lab-button w-full" type="submit">
            Sign in
          </button>
        </form>
        {message && <Message text={message} isError />}
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Administrator access</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Manage site content</h1>
          <p className="mt-2 text-slate-600">Update the public statistics and PDF documents from one place.</p>
        </div>
        <button className="rounded-lg border border-teal-200 px-4 py-2 font-bold text-teal-800 transition hover:bg-teal-50" onClick={handleSignOut}>
          Sign out
        </button>
      </div>

      <form className="mt-8 space-y-4" onSubmit={handleSave}>
        {statistics.map((statistic) => (
          <div className="grid gap-3 rounded-xl border border-slate-200 bg-[#f9fcfd] p-4 md:grid-cols-[160px_1fr]" key={statistic.key}>
            <Field label="Value" value={statistic.value} onChange={(value) => handleStatisticChange(statistic.key, "value", value)} />
            <Field label="Label" value={statistic.label} onChange={(value) => handleStatisticChange(statistic.key, "label", value)} />
          </div>
        ))}
        <button className="lab-button disabled:cursor-not-allowed disabled:opacity-60" disabled={isSaving} type="submit">
          {isSaving ? "Saving..." : "Save changes"}
        </button>
      </form>
      {message && <Message text={message} isError={message.startsWith("Could not") || message.startsWith("Each")} />}

      <section className="mt-10 border-t border-teal-100 pt-8" aria-labelledby="document-upload-heading">
        <div>
          <h2 className="text-xl font-bold text-slate-900" id="document-upload-heading">PDF documents</h2>
          <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">
            Upload a replacement PDF for any public document. PDF files up to 5 MB are accepted.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {PDF_DOCUMENTS.map((document) => (
            <PdfUploadSection
              document={document}
              isUploading={uploadingDocument === document.key}
              key={document.key}
              message={documentMessages[document.key]}
              onSubmit={handleDocumentUpload(document)}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function PdfUploadSection({ document, isUploading, message, onSubmit }) {
  const inputId = `document-${document.key}`;

  return (
    <div className="rounded-xl border border-slate-200 bg-[#f9fcfd] p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-900">{document.title} PDF</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Replaces the document shown on the public {document.title} page.
          </p>
        </div>
        <a
          className="text-sm font-bold text-teal-700 transition hover:text-teal-950"
          href={getDocumentPdfUrl(document.key)}
          rel="noreferrer"
          target="_blank"
        >
          View public document
        </a>
      </div>

      <form className="mt-5 space-y-4" onSubmit={onSubmit}>
        <label className="block text-sm font-medium text-slate-700" htmlFor={inputId}>
          Select PDF
          <input
            accept="application/pdf,.pdf"
            className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-teal-100 file:px-3 file:py-1.5 file:font-semibold file:text-teal-900 hover:file:bg-teal-200"
            id={inputId}
            name="pdf"
            required
            type="file"
          />
        </label>
        <button className="lab-button disabled:cursor-not-allowed disabled:opacity-60" disabled={isUploading} type="submit">
          {isUploading ? "Uploading..." : "Upload PDF"}
        </button>
      </form>
      {message && <Message text={message} isError={!message.includes("uploaded successfully")} />}
    </div>
  );
}

function PageShell({ children }) {
  return (
    <main className="site-shell grid min-h-screen px-6 py-12 text-slate-900 md:py-16" id="main-content">
      <div className="lab-surface mx-auto w-full max-w-3xl self-center p-6 md:p-10">
        {children}
      </div>
    </main>
  );
}

function Field({ label, type = "text", value, onChange }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <input
        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-teal-500 focus:ring-2"
        onChange={(event) => onChange(event.target.value)}
        required
        type={type}
        value={value}
      />
    </label>
  );
}

function Message({ text, isError }) {
  return <p className={`mt-5 text-sm ${isError ? "text-red-700" : "text-emerald-700"}`}>{text}</p>;
}

function SetupRequired() {
  return (
    <PageShell>
      <h1 className="text-3xl font-bold text-slate-900">Supabase setup required</h1>
      <p className="mt-3 text-slate-600">Add the two variables from <code>.env.example</code>, then restart the development server.</p>
    </PageShell>
  );
}

export default Admin;
