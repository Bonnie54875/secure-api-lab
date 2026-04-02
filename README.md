Лабораторна робота №6
Виконав: Криворучко Тимофій, ІПЗ-3.01

Middleware: Перевіряє, чи залогінений користувач
Controller: Отримує id товару з URL і передає його в OrderService.
Service: Перевіряє, чи є товар на складі, рахує ціну зі знижкою
Repository: Оновлює кількість товару в таблиці products в базі даних
Controller: Повертає клієнту статус 201 Created з об'єктом замовлення

Приклад middleware - функції:

import { Request, Response, NextFunction } from 'express';
const { isEmpty, isFloat }  = require ('validator');
import { AppError } from '../errors/AppError';

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

Приклад DTO: 
import { ClientOrder } from '../services/client_order.ts';

export class ProductResponseDTO {
  id: number;
  client_id: number;
  date: Date;

  constructor(clientOrder: ClientOrder) {
    this.id = clientOrder.id;
    this.client_id = clientOrder.client_id;
    this.date = clientOrder.date;
  }
}

Приклад сервіс классу:
const { order_models }  = require( '../services/order_models.js'); // Ваш DataSource
import { OrderModels } from '../services/order_models.ts'; // Ваша entity

class ProductService {
  private productRepository = order_models.getRepository(OrderModels);

  async create(productData: { model_id: number, approved_state: boolean, client_models_id: number, client_order_id: number }): Promise<OrderModels> {
    const product = this.productRepository.create(productData);

    await this.productRepository.save(product);

    return product;
  }

  async findOne(id: string): Promise<OrderModels> {
    const product = await this.productRepository.findOne({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async findAll(id: string): Promise<OrderModels> {
    const product = await this.productRepository.findAll({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async Update(id: string): Promise<OrderModels> {
    const product = await this.productRepository.Update({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async Delete(id: string): Promise<OrderModels> {
    const product = await this.productRepository.Delete({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }
}

export { ProductService };

<img width="1093" height="917" alt="image" src="https://github.com/user-attachments/assets/9a0c56c2-6426-4544-a8e2-463f3d0066ab" />

