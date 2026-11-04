import { Navigate, useParams } from "react-router-dom";
import PdfDocumentPage from "../components/PdfDocumentPage";
import { PDF_DOCUMENTS } from "../lib/documents";

const activityKeys = new Set(
  PDF_DOCUMENTS
    .filter((document) => document.category === "Academic Activities")
    .map((document) => document.key),
);

function AcademicActivity() {
  const { activity } = useParams();

  if (!activityKeys.has(activity)) {
    return <Navigate replace to="/" />;
  }

  return <PdfDocumentPage documentKey={activity} />;
}

export default AcademicActivity;
