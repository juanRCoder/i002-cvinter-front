import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const handleDownloadPdf = async (
  cvRef: React.RefObject<HTMLDivElement>
) => {
  if (!cvRef.current) return;

  try {
    const cvElement = cvRef.current;
    // Captura la imagen del elemento
    const canvas = await html2canvas(cvElement, { scale: 2 }); // Ajusta el scale si es necesario
    const data = canvas.toDataURL("image/png");

    // Crea un nuevo documento PDF
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    // Añade la imagen al PDF
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    // Guarda el PDF
    pdf.save("CVinter-curriculum.pdf");
  } catch (error) {
    console.error("Error al generar el PDF:", error);
  }
};
