// src/middleware/validation/product/validatorCreateProduct.ts

import { Request, Response, NextFunction } from 'express';
const { isEmpty, isFloat }  = require ('validator');
import { AppError } from '../errors/AppError';

export async function validatorCreateProduct(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const { id, date_of_employment, branch_id, employee_id } = req.body;

  if (isEmpty(id || '')) {
    throw new AppError('ID is required');
  }

  if (isEmpty(date_of_employment || '')) {
    throw new AppError('Date of Employment is required');
  }

  if (isEmpty(branch_id || '')) {
    throw new AppError('Branch ID is required');
  }

  if (isEmpty(employee_id || '')) {
    throw new AppError('Employee ID is required');
  }

  return next();
}