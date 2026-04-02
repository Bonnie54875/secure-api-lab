// src/dto/ProductResponseDTO.ts
import { Service } from '../services/service.ts';

export class ProductResponseDTO {
  id: number;
  description: string;
  name: string;
  price: number;

  constructor(service: Service) {
    this.id = service.id;
    this.description = service.description;
    this.name = service.name;
    this.price = service.price;
  }
}