import Item from "../item/item";
import { Product } from "../schema/product";

export default function ItemList( { data }: { data: Product[] | [] } ) {
    return (
            data.map( machinery => <Item key={machinery.name} name={machinery.name} serie={machinery.serie} status={machinery.status} last_service={machinery.last_service} next_service={machinery.next_service} description={machinery.description} timestamp={machinery.timestamp} /> )
    );
};