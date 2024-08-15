// calculating Top Selling Product: Find the product with the highest total sales.

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

// Function to find the top-selling product
function findTopSellingProduct(salesByProduct) {
    let topProduct = null;
    let maxSales = 0;

    for (const [product, sales] of Object.entries(salesByProduct)) {
        if (sales > maxSales) {
            maxSales = sales;
            topProduct = product;
        }
    }

    return { product: topProduct, totalSales: maxSales };
}

// Calculating total sales for each product
const salesByProduct = calculateTotalSalesByProduct(salesData);

// Finding the top-selling product
const topSellingProduct = findTopSellingProduct(salesByProduct);
console.log('Top Selling Product:', topSellingProduct);
