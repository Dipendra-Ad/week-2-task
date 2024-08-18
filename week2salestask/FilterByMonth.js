// // Filtering  Sales by Date: Get all sales records for a specific month (e.g., February 2023)

const salesData = require('./model/salesdata.json');

// Function to get sales by specific month and year
function getSalesByMonthYear(data, year, month) {
    const index = data.reduce((index, record) => {
        const date = new Date(record.date);
        const recordYear = date.getFullYear();
        const recordMonth = date.getUTCMonth(); 
        const key = `${recordYear}-${recordMonth.toString().padStart(2, '0')}`;
        
        if (!index[key]) {
            index[key] = [];
        }
        index[key].push(record);
        return index;
    }, {});

    const key = `${year}-${month.toString().padStart(2, '0')}`;
    return index[key] || [];
}

// Define the target ISO date (YYYY-MM)
const isoDate = '2023-01'; 
const [targetYear, targetMonth] = isoDate.split('-').map(Number);

// Get sales data for the specified month and year
const filteredSales = getSalesByMonthYear(salesData, targetYear, targetMonth);
if (filteredSales.length > 0) {
    console.log(`Sales Records for ${targetMonth}/${targetYear}:`, filteredSales);
} else {
    console.log(`No sales records found for ${targetMonth}/${targetYear}.`);
}
