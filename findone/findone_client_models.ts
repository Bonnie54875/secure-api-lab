// src/controllers/product/findOneProduct.ts

import { Request, Response } from 'express';
import { ProductService } from '../services/client_models_service';
import { ProductResponseDTO } from '../responceDTO/client_models_DTO';

export async function findOneProduct(req: Request <{ id: string }>, res: Response): Promise<Response> {
  const { id } = req.params;

  const productService = new ProductService();
  const productEntity = await productService.findOne(id);

  return res.json(new ProductResponseDTO(productEntity));
}