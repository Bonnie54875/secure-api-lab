// src/middleware/validation/product/validatorCreateProduct.ts

import { Request, Response, NextFunction } from 'express';
const { isEmpty, isFloat }  = require ('validator');
import { AppError } from '../errors/AppError';

export async function validatorCreateProduct(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const { id, checked_time, checked_date, employee_checked_id, file_link, format, model_id, number_of_iterations, order_id, service_id } = req.body;

  if (isEmpty(id || '')) {
    throw new AppError('ID is required');
  }

  if (isEmpty(checked_time || '')) {
    throw new AppError('Checked Time is required');
  }

  if (isEmpty(checked_date || '')) {
    throw new AppError('Checked Date is required');
  }

  if (isEmpty(employee_checked_id || '')) {
    throw new AppError('Employee Checked ID is required');
  }

  if (isEmpty(file_link || '')) {
    throw new AppError('File Link is required');
  }

  if (isEmpty(format || '')) {
    throw new AppError('Format is required');
  }

  if (isEmpty(model_id || '')) {
    throw new AppError('Model ID is required');
  }

  if (isEmpty(number_of_iterations || '')) {
    throw new AppError('Number of Iterations is required');
  }

  if (isEmpty(order_id || '')) {
    throw new AppError('Order ID is required');
  }

  if (isEmpty(service_id || '')) {
    throw new AppError('Service ID is required');
  }

  return next();
}