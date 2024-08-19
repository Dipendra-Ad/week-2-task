// // // Filtering  Sales by Date: Get all sales records for a specific month (e.g., February 2023)

const salesData = require('./model/salesdata.json');

// Function to get sales by specific month and year
function getSalesByMonthYear(data, year, month) {
    return data.filter(record => {
        const date = new Date(record.date);
        const recordYear = date.getFullYear();
        const recordMonth = date.getMonth(); 
        return recordYear === year && recordMonth === month;
    });
}

// Define the target ISO date (YYYY-MM-DDTHH:mm:ss.sssZ)
const isoDate = '2023-05-19T03:03:44.099Z'; 
const date = new Date(isoDate);
const targetYear = date.getFullYear();
const targetMonth = date.getMonth(); 

// Get sales data for the specified month and year
const filteredSales = getSalesByMonthYear(salesData, targetYear, targetMonth);
if (filteredSales.length > 0) {
    console.log(`Sales Records for ${targetMonth}/${targetYear}:`, filteredSales); 
} else {
    console.log(`No sales records found for ${targetMonth + 1}/${targetYear}.`);
}
