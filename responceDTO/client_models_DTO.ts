// src/dto/ProductResponseDTO.ts
import { ClientModels } from '../services/client_models.ts';

export class ProductResponseDTO {
  client_model_id: number;
  client_id: number;
  model_id: number;

  constructor(clientModels: ClientModels) {
    this.client_model_id = clientModels.client_models_id;
    this.client_id = clientModels.client_id;
    this.model_id = clientModels.models_id;
  }
}