// Filtering  Sales by Date: Get all sales records for a specific month (e.g., February 2023).

const fs = require('fs');

// Read and parse the JSON file
const rawData = fs.readFileSync('model/salesdata.json');
const salesData = JSON.parse(rawData);

// Function to filter sales by specific month and year
function filterSalesByMonthYear(data, month, year) {
    return data.filter(record => {
        const recordDate = new Date(record.date);
        return recordDate.getMonth() === month-1 && recordDate.getFullYear() === year;
    });
}

// Define the month and year to filter by
const targetMonth = 2; 
const targetYear = 2023;

// Filter the sales data
const filteredSales = filterSalesByMonthYear(salesData, targetMonth, targetYear);

console.log(`Sales Records for ${targetMonth}/${targetYear}:`, filteredSales);
