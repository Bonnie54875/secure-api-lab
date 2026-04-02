// src/dto/ProductResponseDTO.ts
import { ClientOrder } from '../services/client_order.ts';

export class ProductResponseDTO {
  id: number;
  client_id: number;
  date: Date;

  constructor(clientOrder: ClientOrder) {
    this.id = clientOrder.id;
    this.client_id = clientOrder.client_id;
    this.date = clientOrder.date;
  }
}