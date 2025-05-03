const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json()); // To parse JSON data from the frontend

// Endpoint to handle the "Confirm" button action
app.post('/save-order', (req, res) => {
    const { orderDetails, orderId, totalAmount } = req.body;

    // Define the file path
    const filePath = path.join('C:\\Users\\porky\\Desktop\\MagnetImages\\Jobs', `Order_${orderId}.txt`);

    // Create the content for the A4 file
    const fileContent = `
        Order Details: ${orderDetails}
        Order ID: ${orderId}
        Total Amount: $${totalAmount}
    `;

    // Save the file
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            console.error('Error saving the file:', err);
            return res.status(500).send('Failed to save the order.');
        }
        res.send('Order saved successfully!');
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});