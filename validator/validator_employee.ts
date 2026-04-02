// src/middleware/validation/product/validatorCreateProduct.ts

import { Request, Response, NextFunction } from 'express';
const { isEmpty, isFloat }  = require ('validator');
import { AppError } from '../errors/AppError';

export async function validatorCreateProduct(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const { id, name, position, email } = req.body;

  if (isEmpty(id || '')) {
    throw new AppError('ID is required');
  }

  if (isEmpty(name || '')) {
    throw new AppError('Name is required');
  }

  if (isEmpty(position || '')) {
    throw new AppError('Position is required');
  }

  if (isEmpty(email || '')) {
    throw new AppError('Email is required');
  }

  return next();
}