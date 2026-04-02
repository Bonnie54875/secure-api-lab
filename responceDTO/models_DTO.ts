// src/dto/ProductResponseDTO.ts
import { Models } from '../services/models.ts';

export class ProductResponseDTO {
  id: number;
  approved_state: boolean;
  description: string;
  file_link: boolean;
  model_used: number;
  name: string;
  uploaded_date: Date;

  constructor(models: Models) {
    this.id = models.id;
    this.approved_state = models.approved_state;
    this.description = models.description;
    this.file_link = models.file_link;
    this.model_used = models.model_used;
    this.name = models.name;
    this.uploaded_date = models.uploaded_date;
  }
}