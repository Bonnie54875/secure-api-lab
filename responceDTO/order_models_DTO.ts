// src/dto/ProductResponseDTO.ts
import { OrderModels } from '../services/order_models.ts';

export class ProductResponseDTO {
  id: number;
  approved_state: boolean;
  file_link: string;
  client_model_id: number;
  service_order_id: number;

  constructor(orderModels: OrderModels) {
    this.id = orderModels.id;
    this.approved_state = orderModels.approved_state;
    this.file_link = orderModels.file_link;
    this.client_model_id = orderModels.client_model_id;
    this.service_order_id = orderModels.service_order_id;
  }
}