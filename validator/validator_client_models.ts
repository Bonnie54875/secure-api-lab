// src/middleware/validation/product/validatorCreateProduct.ts

import { Request, Response, NextFunction } from 'express';
const { isEmpty, isFloat }  = require ('validator');
import { AppError } from '../errors/AppError';

export async function validatorCreateProduct(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const { client_id, model_id, client_model_id } = req.body;

  if (isEmpty(client_id || '')) {
    throw new AppError('Client ID is required');
  }

  if (isEmpty(model_id || '')) {
    throw new AppError('Model ID is required');
  }

  if (isEmpty(client_model_id || '')) {
    throw new AppError('Client Model ID is required');
  }

  return next();
}