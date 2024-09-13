import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/Orion_Cable_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  return (
    <Document file={pdf}>
      <Page pageNumber={1} />
    </Document>
  );
}

