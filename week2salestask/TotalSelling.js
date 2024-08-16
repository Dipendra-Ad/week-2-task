// calculating Total Sales for Each Product: Calculate the total sales (quantity * price) for each product.
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

// Calculating total sales for each product
const salesByProduct = calculateTotalSalesByProduct(salesData);
console.log('Total Sales for Each Product:', salesByProduct);