export default function ReviewDetail({ params }: {
    params: {
        productId: string
        reviewId: string
    }
}) {
    return <div>
        <h1>Review {params.reviewId} for product {params.productId}</h1>
        <p>This is the review detail page for review {params.reviewId} of product {params.productId}</p>
    </div>
}