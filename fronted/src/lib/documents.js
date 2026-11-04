import { supabase } from "./supabase";

export const DOCUMENTS_BUCKET = "publications";
export const MAX_PDF_SIZE = 5 * 1024 * 1024;

export const PDF_DOCUMENTS = [
  {
    key: "project-based-learning",
    path: "project-based-learning.pdf",
    fileName: "Project_Based_Learning.pdf",
    category: "Research",
    title: "Project-based Learning",
    documentTitle: "Project-based learning",
    description: "View or download project-based learning activities led by Dr. Mahmadasraf A. Mulla.",
    unavailableText: "The project-based learning PDF will be available here shortly.",
  },
  {
    key: "publications",
    path: "updated-publications-mam.pdf",
    fileName: "Updated_Publications_MAM.pdf",
    category: "Research",
    title: "Publications",
    documentTitle: "Updated publications record",
    description: "View or download the updated publications record of Dr. Mahmadasraf A. Mulla.",
    unavailableText: "The publications PDF will be available here shortly.",
  },
  {
    key: "projects",
    path: "projects.pdf",
    fileName: "Project_Grants_Consultancy_Work.pdf",
    category: "Research",
    title: "Project Grants/Consultancy Work",
    documentTitle: "Project grants and consultancy work",
    description: "View or download the project grants and consultancy work record of Dr. Mahmadasraf A. Mulla.",
    unavailableText: "The project grants and consultancy work PDF will be available here shortly.",
  },
  {
    key: "thesis",
    path: "thesis-supervision.pdf",
    fileName: "Thesis_Supervision.pdf",
    category: "Research",
    title: "Thesis Supervision",
    documentTitle: "Thesis supervision",
    description: "View or download the thesis supervision record of Dr. Mahmadasraf A. Mulla.",
    unavailableText: "The thesis supervision PDF will be available here shortly.",
  },
  {
    key: "outreach",
    path: "outreach-activities.pdf",
    fileName: "Outreach_Activities.pdf",
    category: "Outreach",
    title: "Outreach Activities",
    documentTitle: "Outreach activities",
    description: "View or download Dr. Mahmadasraf A. Mulla's outreach activities.",
    unavailableText: "The outreach activities PDF will be available here shortly.",
  },
  {
    key: "organized",
    path: "conferences-workshops-organized.pdf",
    fileName: "Conferences_and_Workshops_Organized.pdf",
    category: "Academic Activities",
    title: "Conferences & Workshops Organized",
    documentTitle: "Conferences and workshops organized",
    description: "View or download conferences and workshops organized by Dr. Mahmadasraf A. Mulla.",
    unavailableText: "The conferences and workshops PDF will be available here shortly.",
  },
  {
    key: "attended",
    path: "events-attended.pdf",
    fileName: "Events_Attended.pdf",
    category: "Academic Activities",
    title: "Events Attended",
    documentTitle: "Events attended",
    description: "View or download events attended by Dr. Mahmadasraf A. Mulla.",
    unavailableText: "The events-attended PDF will be available here shortly.",
  },
  {
    key: "expert-talks",
    path: "expert-talks.pdf",
    fileName: "Expert_Talks.pdf",
    category: "Academic Activities",
    title: "Expert Talks",
    documentTitle: "Expert talks",
    description: "View or download expert talks delivered by Dr. Mahmadasraf A. Mulla.",
    unavailableText: "The expert-talks PDF will be available here shortly.",
  },
];

export const PDF_DOCUMENTS_BY_KEY = Object.fromEntries(
  PDF_DOCUMENTS.map((document) => [document.key, document]),
);

export function getDocumentPdfUrl(key, { download = false } = {}) {
  const document = PDF_DOCUMENTS_BY_KEY[key];

  if (!supabase || !document) {
    return null;
  }

  const { data } = supabase.storage
    .from(DOCUMENTS_BUCKET)
    .getPublicUrl(
      document.path,
      download ? { download: document.fileName } : undefined,
    );

  return data.publicUrl;
}

export async function uploadDocumentPdf(key, file) {
  const document = PDF_DOCUMENTS_BY_KEY[key];

  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  if (!document) {
    throw new Error("Unknown document.");
  }

  if (!file || !/\.pdf$/i.test(file.name)) {
    throw new Error("Choose a PDF file to upload.");
  }

  if (file.type && file.type !== "application/pdf") {
    throw new Error("Choose a valid PDF file to upload.");
  }

  if (file.size === 0) {
    throw new Error("The PDF cannot be empty.");
  }

  if (file.size > MAX_PDF_SIZE) {
    throw new Error("The PDF must be 5 MB or smaller.");
  }

  const { data, error } = await supabase.storage
    .from(DOCUMENTS_BUCKET)
    .upload(document.path, file, {
      cacheControl: "300",
      contentType: "application/pdf",
      upsert: true,
    });

  if (error) {
    throw error;
  }

  return data;
}
