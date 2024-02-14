import { Product, Status } from "../schema/product";


export default function Item( { name, serie, status, last_service, next_service, description }: Product ) {
    return <>
        <p>{name}</p>
        <p>{serie}</p>
        <p>{status}</p>
        <p>{last_service}</p>
        <p>{next_service}</p>
        <p>{description}</p>
    </>;
};