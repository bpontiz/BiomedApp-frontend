

export default function ItemDetail( { params }: { params: { itemId: string }}) {
    return (
        <h1>Item Details {params.itemId}</h1>
    )
};