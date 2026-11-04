import { Download, ExternalLink, FileText } from "lucide-react";
import PageHero from "./ui/PageHero";

function PdfViewerPage({
  category,
  description,
  documentTitle,
  downloadUrl,
  fileName,
  pdfUrl,
  title,
  unavailableText,
}) {
  if (!pdfUrl || !downloadUrl) {
    return <DocumentUnavailable title={title} text={unavailableText} />;
  }

  return (
    <main className="site-shell" id="main-content">
      <PageHero
        eyebrow={category}
        title={title}
        description={description}
        actions={(
          <a className="lab-button" href={downloadUrl}>
            <Download aria-hidden="true" className="h-4 w-4" />
            Download PDF
          </a>
        )}
      />

      <section className="lab-section lab-section--mist">
        <div className="lab-container">
          <div className="lab-surface overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-5 border-b border-slate-200 bg-[#f7fbfc] px-5 py-4 md:px-7">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#082640] text-teal-200">
                  <FileText aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h2 className="truncate font-bold text-slate-900">{documentTitle}</h2>
                  <p className="truncate text-sm text-slate-600">{fileName}</p>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 transition hover:text-teal-950"
                href={pdfUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open in a new tab
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <object
              aria-label={`${title} PDF`}
              className="h-[62vh] min-h-[360px] w-full bg-slate-100 md:h-[72vh] md:min-h-[560px]"
              data={pdfUrl}
              type="application/pdf"
            >
              <div className="grid min-h-[320px] place-items-center px-6 py-12 text-center">
                <div>
                  <p className="font-semibold text-slate-900">Your browser cannot display this PDF inline.</p>
                  <a className="lab-button mt-4" href={downloadUrl}>
                    <Download aria-hidden="true" className="h-4 w-4" />
                    Download the PDF
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>
      </section>
    </main>
  );
}

function DocumentUnavailable({ title, text }) {
  return (
    <main className="site-shell grid min-h-[70vh] place-items-center px-6 py-16" id="main-content">
      <div className="lab-surface max-w-xl p-8 text-center md:p-10">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#082640] text-teal-200">
          <FileText aria-hidden="true" className="h-6 w-6" />
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">{title} document is being prepared</h1>
        <p className="mt-3 leading-7 text-slate-600">{text}</p>
      </div>
    </main>
  );
}

export default PdfViewerPage;
