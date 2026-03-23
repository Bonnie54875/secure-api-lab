import 'reflect-metadata';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({name: 'employee_branch_info'})

export class EmployeeBranchInfo {
    @PrimaryGeneratedColumn()
    id!: number;            //employee branch info id

    @Column({ type: 'number', unique: true})
    branch_id!: number;

    @Column({ type: 'number', unique: true})
    employee_id!: number;
    
    @CreateDateColumn()
    date_of_employment!: Date;
}