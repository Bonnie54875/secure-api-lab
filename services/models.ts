import 'reflect-metadata';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity({name: 'models'})

export class Models {
    @PrimaryGeneratedColumn()
    id!: number;            //model id

    @Column({ type: "boolean", default: false })
    approved_state!: boolean;

    @Column({ type: "text", nullable: true })
    description!: string;

    @Column({ type: "string", length: 255 })
    file_link!: boolean;

    @Column({ type: "number", default: 0 })
    model_used!: number;

    @Column({ type: "string", length: 255})
    name!: string;

    @CreateDateColumn()
    uploaded_date!: Date;
}