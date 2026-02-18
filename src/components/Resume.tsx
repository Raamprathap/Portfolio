import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Pin worker version to match installed pdfjs-dist
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDF_URL = "/assets/Resume_Raam.pdf";

export default function Resume() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const renderTaskRef = useRef<pdfjsLib.RenderTask | null>(null);

  // Load the PDF document once
  useEffect(() => {
    setLoading(true);
    setError(null);
    pdfjsLib
      .getDocument(PDF_URL)
      .promise.then((doc) => {
        setPdfDoc(doc);
        setTotalPages(doc.numPages);
        setCurrentPage(1);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load PDF. Please download it instead.");
        setLoading(false);
      });
  }, []);

  // Render the current page whenever pdfDoc or currentPage changes
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    // Cancel any in-progress render
    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
    }

    pdfDoc.getPage(currentPage).then((page) => {
      const canvas = canvasRef.current!;
      const container = canvas.parentElement!;
      const containerWidth = container.clientWidth || 800;

      const viewport = page.getViewport({ scale: 1 });
      const scale = containerWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;

      const ctx = canvas.getContext("2d")!;
      const renderTask = page.render({
        canvasContext: ctx,
        viewport: scaledViewport,
      });
      renderTaskRef.current = renderTask;

      renderTask.promise.catch((err) => {
        if (err?.name !== "RenderingCancelledException") {
          console.error("Render error:", err);
        }
      });
    });
  }, [pdfDoc, currentPage]);

  function printResume() {
    const printWindow = window.open(PDF_URL, "_blank");
    if (!printWindow) return;
    printWindow.addEventListener("load", () => printWindow.print());
  }

  return (
    <div className="w-full mx-auto my-8 px-8 py-0 text-[var(--text-primary)]">
      <div className="text-center mb-8">
        <h1 className="text-5xl kaushan-script-regular">Resume</h1>
        <p className="text-lg mx-auto mt-4 text-[var(--text-secondary)]">
          Here's my comprehensive resume showcasing my skills, experience, and
          qualifications. Feel free to download or print it for future
          reference.
        </p>
        <div className="flex justify-center mt-8 gap-4">
          <a
            href={PDF_URL}
            download
            className="flex gap-2 mt-4 px-6 py-3 bg-[var(--button-primary-bg)] text-white rounded-full hover:bg-[var(--accent-blue)] transition-colors duration-300"
          >
            <i className="fa-solid fa-download mt-1.5"></i>
            <p>Download Resume</p>
          </a>
          <button
            className="flex gap-2 mt-4 px-6 py-3 bg-[var(--button-primary-bg)] text-white rounded-full hover:bg-[var(--accent-blue)] transition-colors duration-300 cursor-pointer"
            onClick={printResume}
          >
            <i className="fa-solid fa-print mt-1.5"></i>
            <p>Print Resume</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-[var(--bg-card)] rounded-md shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          {loading && (
            <div className="flex justify-center items-center h-64 text-[var(--text-secondary)]">
              <i className="fa-solid fa-spinner fa-spin mr-2"></i> Loading PDF...
            </div>
          )}
          {error && (
            <div className="flex flex-col items-center justify-center h-64 gap-4 text-[var(--text-secondary)]">
              <p>{error}</p>
              <a
                href={PDF_URL}
                download
                className="px-6 py-3 bg-[var(--button-primary-bg)] text-white rounded-full hover:bg-[var(--accent-blue)] transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          )}
          {!loading && !error && (
            <div className="w-full overflow-auto rounded-md">
              <canvas ref={canvasRef} className="w-full h-auto block" />
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && !loading && !error && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[var(--button-primary-bg)] text-white rounded-full hover:bg-[var(--accent-blue)] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <span className="text-[var(--text-secondary)]">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-[var(--button-primary-bg)] text-white rounded-full hover:bg-[var(--accent-blue)] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
