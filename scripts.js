window.addEventListener("DOMContentLoaded", (event) => {
    const btnGenerate = document.querySelector("#generatePdf");
    btnGenerate.addEventListener("click", () => {

        // PDF Content
        const content = document.querySelector("#content");

        // Final PDF file configuration
        const options = {
            margin: [10, 10, 10, 10],
            filename: "file.pdf",
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        }

        // Generate & Download PDF
        html2pdf().set(options).from(content).save();
    })
});