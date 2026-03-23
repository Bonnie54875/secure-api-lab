import 'reflect-metadata';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({name: 'client_order'})

export class ClientOrder {
    @PrimaryGeneratedColumn()
    id!: number;            // order id

    @Column({ type: 'number' })
    client_id!: number;

    @CreateDateColumn()
    createdAt!: Date;
}