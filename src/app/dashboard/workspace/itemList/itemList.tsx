'use-client'
import Item from "../item/item";
import { ProductDb } from "../schema/product";

export default function ItemList( { data }: { data: ProductDb[] | [] } ) {
    return (
        <div>
            {
                data.map( machinery => <Item key={machinery.id}/>)
            }
        </div>
    );
};