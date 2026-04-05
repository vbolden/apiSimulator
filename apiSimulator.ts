// IMPORT ERROR CLASSES
import { NetworkError, DataError } from "./errors";

// FUNCTIONS WITH PROMISES
export function fetchProductCatalog(): Promise<{ id: number; name: string; price: number }[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.85) {
                const products = [
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphone", price: 150 },
                    { id: 3, name: "Phone", price: 800 },
                    { id: 4, name: "Tablet", price: 1100 },
                ];
                if (!products || products.length === 0) {
                    reject(new DataError("Product catalog is empty"));
                    return;
                }
                resolve(products)

            } else {
                reject(new NetworkError("Network issue while fetching product catalog"))
            }
        }, 1000)
    })
}

export function fetchProductReviews(productId: number): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.8) {
                reject(new NetworkError(`Network issue fetching reviews for product ${productId}`));
                return;
            } else {
                const reviews = [
                    "Great Product!",
                    "Would recommend to friends and family",
                    "I've used better, wasn't bad though",
                ];

                if (!reviews || reviews.length === 0) {
                    reject(new DataError("Review data is missing"));
                    return;
                }

                resolve(reviews)
            }
        }, 1500)
    })
}

export function fetchSalesReport(): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.8) {
                reject(new NetworkError("Network issues while fetching sales report"))
            } else {

                const report = {
                    totalSales: 135000,
                    unitsSold: 540,
                    averagePrice: 250,
                }

                if (!report) {
                    reject(new DataError("Sales report missing data"));
                    return;
                }

                resolve(report);
            }
        }, 1000)
    })
}
