// src/middleware/validation/product/validatorCreateProduct.ts

import { Request, Response, NextFunction } from 'express';
const { isEmpty, isFloat }  = require ('validator');
import { AppError } from '../../../../errors/AppError';

export async function validatorCreateProduct(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const { name, price } = req.body;

  if (isEmpty(name || '')) {
    throw new AppError('Product name is required');
  }

  if (!price || !isFloat(String(price), { gt: 0 })) {
    throw new AppError('Price must be a number greater than 0');
  }

  return next();
}