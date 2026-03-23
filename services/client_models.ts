import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "client_models"})

export class ClientModels{
    @PrimaryGeneratedColumn()
    client_models_id!: number;

    @Column({ type: "long", length: 255 })
    client_id!: number;

    @Column({ type: "long", length: 255 })
    models_id!: number;
}
