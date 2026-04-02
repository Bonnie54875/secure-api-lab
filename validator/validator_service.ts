// src/middleware/validation/product/validatorCreateProduct.ts

import { Request, Response, NextFunction } from 'express';
const { isEmpty, isFloat }  = require ('validator');
import { AppError } from '../errors/AppError';

export async function validatorCreateProduct(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const { id, name, description, price } = req.body;

  if (isEmpty(id || '')) {
    throw new AppError('ID is required');
  }

  if (isEmpty(name || '')) {
    throw new AppError('Name is required');
  }

  if (isEmpty(description || '')) {
    throw new AppError('Description is required');
  }

  if (isEmpty(price || '')) {
    throw new AppError('Price is required');
  }

  return next();
}