// Select the necessary elements
const input = document.getElementById("qr-input");
const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("downloadBtn");
const qrCanvas = document.getElementById("qr-code");

// Initialize QRious
const qr = new QRious({
    element: qrCanvas, // Bind QRious to the canvas
    size: 200,         // Set the size of the QR Code
});

// Event Listener: Generate QR Code
generateBtn.addEventListener("click", () => {
    const text = input.value.trim();

    if (text) {
        // Generate the QR code with the entered text
        qr.value = text;

        // Show the download button
        downloadBtn.style.display = "inline-block";
    } else {
        alert("Please enter some text to generate a QR Code.");
    }
});

// Event Listener: Download QR Code
downloadBtn.addEventListener("click", () => {
    // Convert canvas content to a data URL (PNG format)
    const dataURL = qrCanvas.toDataURL("image/png");

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = dataURL;

    // Set the filename for the downloaded image
    link.download = "qr-code.png";

    // Programmatically click the link to trigger download
    link.click();
});
