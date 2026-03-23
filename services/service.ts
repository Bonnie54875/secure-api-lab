import 'reflect-metadata';
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({name: 'service'})

export class Service {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    description!: string;

    @Column ({ type: 'string', length: 255})
    name!: string;

    @Column ({ type: 'number' })
    price!: number;
}