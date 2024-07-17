import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const handleDownloadPdf = async (cvRef: React.RefObject<HTMLDivElement>) => {
  if (!cvRef.current) return;
  const cvElement = cvRef.current;
  const canvas = await html2canvas(cvElement, { scale: 5 });
  const data = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("CVinter-curriculum.pdf");
};
