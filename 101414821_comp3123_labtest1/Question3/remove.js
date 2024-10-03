const fs = require('fs');
const path = require('path');

// Define the directory path to Logs
const logsDir = path.join(__dirname, 'Logs');

// Check if Logs directory exists
if (fs.existsSync(logsDir)) {
    
    fs.readdirSync(logsDir).forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`Deleting file: ${file}`);
        fs.unlinkSync(filePath);
    });

    // Remove the Logs directory after all files are deleted
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed successfully.');
} else {
    console.log('Logs directory does not exist.');
}