// // calculating Top Selling Product: Find the product with the highest total sales.

const salesData = require('./model/salesdata.json');

// Function to calculate total sales and find the top-selling product
function calculateSalesAndFindTopProduct(data) {
    return data.reduce((acc, record) => {
        const { product, quantity, price } = record;
        const totalSales = quantity * price;

        // Aggregate total sales by product
        if (!acc.salesByProduct[product]) {
            acc.salesByProduct[product] = 0;
        }
        acc.salesByProduct[product] += totalSales;

        // Update top-selling product
        if (acc.salesByProduct[product] > acc.maxSales) {
            acc.maxSales = acc.salesByProduct[product];
            acc.topProduct = product;
        }

        return acc;
    }, { salesByProduct: {}, topProduct: null, maxSales: 0 });
}

// Calculating total sales and finding the top-selling product
const { salesByProduct, topProduct, maxSales } = calculateSalesAndFindTopProduct(salesData);
console.log('Total Sales by Product:', salesByProduct);
console.log('Top Selling Product:', { product: topProduct, totalSales: maxSales });
