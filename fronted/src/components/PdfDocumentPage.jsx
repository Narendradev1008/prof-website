import { useEffect, useState } from "react";
import {
  getDocumentPdfUrl,
  PDF_DOCUMENTS_BY_KEY,
} from "../lib/documents";
import PdfViewerPage from "./PdfViewerPage";

function PdfDocumentPage({ documentKey }) {
  const document = PDF_DOCUMENTS_BY_KEY[documentKey];
  const pdfUrl = getDocumentPdfUrl(documentKey);
  const downloadUrl = getDocumentPdfUrl(documentKey, { download: true });
  const [availability, setAvailability] = useState({
    isAvailable: null,
    pdfUrl: null,
  });

  useEffect(() => {
    if (!pdfUrl) {
      return undefined;
    }

    const controller = new AbortController();

    fetch(pdfUrl, {
      cache: "no-store",
      method: "HEAD",
      signal: controller.signal,
    })
      .then((response) => {
        if (!controller.signal.aborted) {
          setAvailability({ isAvailable: response.ok, pdfUrl });
        }
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setAvailability({ isAvailable: false, pdfUrl });
        }
      });

    return () => controller.abort();
  }, [pdfUrl]);

  if (!document) {
    return null;
  }

  const isChecking = pdfUrl && availability.pdfUrl !== pdfUrl;
  const isAvailable = availability.pdfUrl === pdfUrl && availability.isAvailable;

  if (isChecking) {
    return <DocumentLoading title={document.title} />;
  }

  return (
    <PdfViewerPage
      category={document.category}
      description={document.description}
      documentTitle={document.documentTitle}
      downloadUrl={isAvailable ? downloadUrl : null}
      fileName={document.fileName}
      pdfUrl={isAvailable ? pdfUrl : null}
      title={document.title}
      unavailableText={document.unavailableText}
    />
  );
}

function DocumentLoading({ title }) {
  return (
    <main className="site-shell grid min-h-[70vh] place-items-center px-6 py-16" id="main-content">
      <div className="lab-surface px-7 py-5 text-slate-600">
        <p role="status">Checking {title.toLowerCase()} document...</p>
      </div>
    </main>
  );
}

export default PdfDocumentPage;
