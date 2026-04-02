// src/middleware/validation/product/validatorCreateProduct.ts

import { Request, Response, NextFunction } from 'express';
const { isEmpty, isFloat }  = require ('validator');
import { AppError } from '../errors/AppError';

export async function validatorCreateProduct(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const { id, approved_state, name, filelink, description, model_used, uploaded_time, uploaded_date } = req.body;

  if (isEmpty(id || '')) {
    throw new AppError('ID is required');
  }

  if (isEmpty(approved_state || '')) {
    throw new AppError('Approved State is required');
  }

  if (isEmpty(name || '')) {
    throw new AppError('Name is required');
  }

  if (isEmpty(filelink || '')) {
    throw new AppError('File Link is required');
  }

  if (isEmpty(description || '')) {
    throw new AppError('Description is required');
  }

  if (isEmpty(model_used || '')) {
    throw new AppError('Model Used is required');
  }

  if (isEmpty(uploaded_time || '')) {
    throw new AppError('Uploaded Time is required');
  }

  if (isEmpty(uploaded_date || '')) {
    throw new AppError('Uploaded Date is required');
  }

  return next();
}