const fs = require('fs');
const path = require('path');

// defining the directory path to Logs
const logsDir = path.join(__dirname, 'Logs');

// Checking if Logs directory exists, if not, creating it
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created successfully.');
}

// Change directory to Logs directory
process.chdir(logsDir);

// Create 10 log files and write some text inside
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}`);
    console.log(`Created file: ${fileName}`);
}