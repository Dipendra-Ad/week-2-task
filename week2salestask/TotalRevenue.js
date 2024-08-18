// // calculating Total Revenue: Calculate the total revenue generated.

const salesData = require('./model/salesdata.json');

// Function to calculate total sales for each product and total revenue
function calculateSalesAndRevenue(data) {
    return data.reduce((acc, record) => {
        const { product, quantity, price } = record;
        const totalSales = quantity * price;

        // Update sales by product
        if (!acc.salesByProduct[product]) {
            acc.salesByProduct[product] = 0;
        }
        acc.salesByProduct[product] += totalSales;

        // Update total revenue
        acc.totalRevenue += totalSales;

        return acc;
    }, { salesByProduct: {}, totalRevenue: 0 });
}

// Calculating total sales by product and total revenue
const { salesByProduct, totalRevenue } = calculateSalesAndRevenue(salesData);

// Display results
console.log('Total Sales by Product:', salesByProduct);
console.log('Total Revenue:', totalRevenue);
