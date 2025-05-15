let currentBoxId = null; // To track the currently selected A4 box

// Function to handle the "Edit Image" button
function editImage(imageId) {
    currentBoxId = imageId; // Store the ID of the image being edited
    document.getElementById('fileInput').click(); // Trigger the file input
}

// Function to set the current A4 box being edited
function editA4Box(boxId) {
    currentBoxId = boxId; // Store the ID of the selected A4 box
    alert(`Selected box: ${boxId}. Now choose an image.`);
    document.getElementById('fileInput').click(); // Trigger the file input
}

// Function to handle file uploads for all boxes
function uploadImages(event) {
    const files = event.target.files; // Get the selected files
    const boxes = document.querySelectorAll('.a4-box img'); // Select all image elements inside the A4 boxes

    for (let i = 0; i < files.length && i < boxes.length; i++) {
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

// Function to update the image when a file is selected
function updateImage(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file && currentBoxId) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageElement = document.querySelector(`#${currentBoxId}`); // Get the image element inside the selected A4 box
            imageElement.src = e.target.result; // Set the image source to the uploaded file
            imageElement.style.display = 'block'; // Make the image visible
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    } else {
        alert('Please select an A4 box first.');
    }
}