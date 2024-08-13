export default function ProductDetail({ params }: {
    params: {
        productId: string
    }
}) {
    return <div>
        <h1>Product {params.productId}</h1>
        <p>This is the product detail page for product {params.productId}</p>
    </div>
}