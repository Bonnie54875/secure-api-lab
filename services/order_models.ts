import 'reflect-metadata';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity({name: 'order_models'})

export class OrderModels {
    @PrimaryGeneratedColumn()
    id!: number;            //model id

    @Column({ type: "boolean", default: false })
    approved_state!: boolean;

    @Column({ type: "string", length: 255 })
    file_link!: boolean;

    @Column({ type: "number", default: 0, unique: true })
    client_model_id!: number;

    @Column({ type: "number", default: 0, unique: true })
    service_order_id!: number;
}