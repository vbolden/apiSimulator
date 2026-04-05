export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};

function fetchProductReviews(productId: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        }, 1000)
    })
}

function fetchSalesReport(totalSales: number, unitsSold: number, averagePrice: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        }, 1000)
    })
}