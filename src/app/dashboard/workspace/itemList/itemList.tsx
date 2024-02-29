import { useEffect, useState } from "react";
import Item from "../item/item";
import Product from "../schema/product";
import ProductDb from "../schema/product";

export default function ItemList( { data, filter }: { data: Product[] | [], filter: string } ) {
    const [filteredStatus, setFilteredStatus] = useState<ProductDb[]>([]);

    useEffect(() => {
        const filterEquipment = data.filter(machinery => machinery.status === filter);
        setFilteredStatus(filterEquipment);
    }, [filter]);

    if (filter === '') {
        return data.map( machinery => <Item key={machinery.name} id={machinery.id} name={machinery.name} serie={machinery.serie} status={machinery.status} last_service={machinery.last_service} next_service={machinery.next_service} area={machinery.area} image={machinery.image} description={machinery.description} timestamp={machinery.timestamp} /> );
    };

    if (filteredStatus.length === 0) {
        return (
            <div>
                There is no equipment with <strong>{filter}</strong> status
            </div>
        )
    };

    return (
        filteredStatus.map( machinery => <Item key={machinery.name} id={machinery.id} name={machinery.name} serie={machinery.serie} status={machinery.status} last_service={machinery.last_service} next_service={machinery.next_service} area={machinery.area} image={machinery.image} description={machinery.description} timestamp={machinery.timestamp} /> )
    )
};