// src/middleware/validation/product/validatorCreateProduct.ts

import { Request, Response, NextFunction } from 'express';
const { isEmpty, isFloat }  = require ('validator');
import { AppError } from '../errors/AppError';

export async function validatorCreateProduct(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const { id, client_id, date, time } = req.body;

  if (isEmpty(id || '')) {
    throw new AppError('ID is required');
  }

  if (isEmpty(client_id || '')) {
    throw new AppError('Client ID is required');
  }

  if (isEmpty(date || '')) {
    throw new AppError('Date is required');
  }

  if (isEmpty(time || '')) {
    throw new AppError('Time is required');
  }

  return next();
}