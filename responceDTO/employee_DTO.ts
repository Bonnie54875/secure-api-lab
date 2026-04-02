// src/dto/ProductResponseDTO.ts
import { Employee } from '../services/employee.ts';

export class ProductResponseDTO {
  id: number;
  email: string;
  name: string;
  surname: string;

  constructor(employee: Employee) {
    this.id = employee.id;
    this.email = employee.email;
    this.name = employee.name;
    this.surname = employee.surname;
  }
}