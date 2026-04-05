// FUNCTIONS WITH PROMISES
export function fetchProductCatalog(): Promise<{id: number; name: string; price: number} []> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphone", price: 150 },
                    { id: 3, name: "Phone", price: 800 },
                    { id: 4, name: "Tablet", price: 1100 }
                ]);
            } else {
                reject("Failed to fetch product catalog")
            }
        }, 1000)
    })
}

export function fetchProductReviews(productId: number): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                reject(`Failed to fetch reviews for product ID ${productId}`)
            } else {
                const reviews = [
                    "Great Product!",
                    "Would recommend to friends and family",
                    "I've used better, wasn't bad though"
                ];
                resolve(reviews)
            }
        }, 1500)
    })
}

export function fetchSalesReport(): Promise <{totalSales: number; unitsSold: number; averagePrice: number}> {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.9) {
                reject("Failed to fetch sales report")
            } else {

                const report = {
                    totalSales: 135000,
                    unitsSold: 540,
                    averagePrice: 250,
                }

                resolve(report);
            }
        }, 1000)
    })
}
