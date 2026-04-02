// src/dto/ProductResponseDTO.ts
import { ServiceOrder } from '../services/service_order.ts';

export class ProductResponseDTO {
  id: number;
  checked_date: Date;
  employee_checked_id: number;
  file_link: number;
  format: string;
  model_id: number;
  number_of_iterations: number;
  order_id: number;
  service_id: number;

  constructor(service_order: ServiceOrder) {
    this.id = service_order.id;
    this.checked_date = service_order.checked_date;
    this.employee_checked_id = service_order.employee_checked_id;
    this.file_link = service_order.file_link;
    this.format = service_order.format;
    this.model_id = service_order.model_id;
    this.number_of_iterations = service_order.number_of_iterations;
    this.order_id = service_order.order_id;
    this.service_id = service_order.service_id;
  }
}