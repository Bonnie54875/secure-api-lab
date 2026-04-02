// src/middleware/validation/product/validatorCreateProduct.ts

import { Request, Response, NextFunction } from 'express';
const { isEmpty, isFloat }  = require ('validator');
import { AppError } from '../errors/AppError';

export async function validatorCreateProduct(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const { model_id, approved_state, file_link, client_models_id, service_order_id} = req.body;

  if (isEmpty(model_id || '')) {
    throw new AppError('Model ID is required');
  }

  if (isEmpty(approved_state || '')) {
    throw new AppError('Approved State is required');
  }

  if (isEmpty(file_link || '')) {
    throw new AppError('File Link is required');
  }

  if (isEmpty(client_models_id || '')) {
    throw new AppError('Client Models ID is required');
  }

  if (isEmpty(service_order_id || '')) {
    throw new AppError('Service Order ID is required');
  }

  return next();
}