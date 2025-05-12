let currentImageId = null; // To track the current image being edited

// Function to handle the "Edit Image" button
function editImage(imageId) {
    currentImageId = imageId; // Store the ID of the image being edited
    document.getElementById('fileInput').click(); // Trigger the file input
}

// Function to update the image when a file is selected
function updateImage(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageElement = document.getElementById(currentImageId);
            imageElement.src = e.target.result; // Set the image source to the uploaded file
            imageElement.style.display = 'block'; // Make the image visible
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
}

// Function to handle file uploads for all boxes
function uploadImages(event) {
    const files = event.target.files; // Get the selected files
    const boxes = document.querySelectorAll('[id^="image"]'); // Select all image elements with IDs starting with "image"

    for (let i = 0; i < files.length; i++) {
        if (i >= boxes.length) {
            alert("All boxes are filled!"); // Notify the user if all boxes are filled
            break;
        }

        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageElement = boxes[i];
            imageElement.src = e.target.result; // Set the image source to the uploaded file
            imageElement.style.display = 'block'; // Make the image visible
        };

        reader.readAsDataURL(file); // Read the file as a data URL
    }
}