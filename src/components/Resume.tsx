export default function Resume() {
    function printResume() {
        const pdfURL = "assets/Raam_Prathap_Resume.pdf";
        const printWindow = window.open(pdfURL, "_blank");
        if (!printWindow) {
            console.error("Failed to open print window.");
            return;
        }
        printWindow.addEventListener("load", function () {
            printWindow.print();
        });
    }
    return (
        <div className="w-full mx-auto my-8 px-8 py-0 text-gray-800">
            <div className="text-center mb-8">
                <h1 className="text-5xl kaushan-script-regular">Resume</h1>
                <p className="text-lg mx-auto mt-4">
                    Here's my comprehensive resume showcasing my skills, experience, and
                    qualifications. Feel free to download or print it for future
                    reference.
                </p>
                <div className="flex justify-center mt-8 gap-4">
                    <a
                        href="assets/Resume_Raam.pdf"
                        download
                        className="flex gap-2 mt-4 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-300"
                    >
                        <i className="fa-solid fa-download mt-1.5"></i>
                        <p>Download Resume</p>
                    </a>
                    <button
                        className="flex gap-2 mt-4 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-300 cursor-pointer" 
                        onClick={printResume}
                    >
                        <i className="fa-solid fa-print mt-1.5"></i>
                        <p>Print Resume</p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="bg-yellow-100 rounded-md shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div className="w-full h-[80vh] overflow-hidden rounded-md shadow-lg">
                        <iframe src="assets/Resume_Raam.pdf" className="w-full h-full"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}