import 'reflect-metadata';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({name: 'clients'})

export class Client {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column ({ type: 'string', length: 255, unique: true })
    email!: string;

    @Column ({ type: 'string', length: 255})
    name!: string;

    @Column ({type: 'string', length: 255})
    surname!: string;
}   