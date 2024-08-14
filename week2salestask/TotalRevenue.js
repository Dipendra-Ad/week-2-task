// calculating Total Revenue: Calculate the total revenue generated.
const fs = require('fs');

// Read and parse the JSON file
const rawData = fs.readFileSync('model/salesdata.json');
const salesData = JSON.parse(rawData);

// Function to calculate total sales for each product
function calculateTotalSalesByProduct(data) {
    const salesByProduct = {};

    data.forEach(record => {
        const { product, quantity, price } = record;
        const totalSales = quantity * price;

        if (!salesByProduct[product]) {
            salesByProduct[product] = 0;
        }
        salesByProduct[product] += totalSales;
    });

    return salesByProduct;
}

// Function to calculate total revenue
function calculateTotalRevenue(salesByProduct) {
    return Object.values(salesByProduct).reduce((total, sales) => total + sales, 0);
}

// Calculating total sales for each product
const salesByProduct = calculateTotalSalesByProduct(salesData);


// Calculating total revenue
const totalRevenue = calculateTotalRevenue(salesByProduct);
console.log('Total Revenue:', totalRevenue);
