// calculating Total Sales for Each Product: Calculate the total sales (quantity * price) for each product.
const salesData = require('./model/salesdata.json');


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