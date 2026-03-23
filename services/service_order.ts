import 'reflect-metadata';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity({name: 'service_order'})

export class ServiceOrder {
    @PrimaryGeneratedColumn()
    id!: number;            //service order id

    @CreateDateColumn()
    checked_date!: Date;

    @Column({ type: 'number', nullable: true })
    employee_checked_id!: number;

    @Column({ type: 'string', length: 255,})
    file_link!: number;

    @Column({ type: 'string' })
    format!: string;

    @Column({ type: 'number', nullable: true })
    model_id!: number;

    @Column({ type: 'number'})
    number_of_iterations!: number;

    @Column({ type: 'number'})
    order_id!: number;

    @Column({ type: 'number'})
    service_id!: number;
}