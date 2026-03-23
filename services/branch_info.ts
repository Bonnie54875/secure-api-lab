import 'reflect-metadata';
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({name: 'branch'})

export class Branch {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    address!: string;
}