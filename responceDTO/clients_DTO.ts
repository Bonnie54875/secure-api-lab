// src/dto/ProductResponseDTO.ts
import { Client } from '../services/clients.ts';

export class ProductResponseDTO {
  id: number;
  email: string;
  name: string;
  surname: string;

  constructor(client: Client) {
    this.id = client.id;
    this.email = client.email;
    this.name = client.name;
    this.surname = client.surname;
  }
}