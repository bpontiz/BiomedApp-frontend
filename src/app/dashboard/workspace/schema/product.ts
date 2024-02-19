export type Status = 'Available' | 'Repairing' | 'In use' | 'Damaged';

export default interface ProductDb {
    id: number;
    name: string;
    serie: string;
    status: Status;
    last_service: string;
    next_service: string;
    description: string;
    area: string;
    image: string;
    timestamp: string
};