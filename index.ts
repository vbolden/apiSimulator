import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";

const main = () => {
    fetchProductCatalog()
        .then((products) => {
            console.log("Products: ", products);

            // FETCH REVIEWS FOR EACH PRODUCT
            const reviewPromises = products.map((product: any) => {
                return fetchProductReviews(product.id)
                    .then((reviews) => {
                        console.log(`Reviews for ${product.name}: `, reviews);
                    })
                    .catch((err) => {
                        console.error(`Error fetching reviews for ${product.name}: `, err);
                    });
            });
            // WAIT FOR ALL REVIEW REQUESTS TO COMPLETE
            return Promise.all(reviewPromises);
        })
        .then(() => {
            // FETCH SALES REPORT AFTER REVIEWS
            return fetchSalesReport()
                .then((report) => {
                    console.log("Sales Report: ", report);
                })
                .catch((err) => {
                    console.error("Error fetching sales report: ", err);
                });
        })
        .catch((err) => {
            console.error("Error fetching product catalog: ", err);
        })
        .finally(() => {
            console.log("All API calls have been attempted.");
        });
};

main();