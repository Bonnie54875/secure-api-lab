const { service_order }  = require( '../services/service_order.js'); // Ваш DataSource
import { TimeLike } from 'fs';
import { ServiceOrder } from '../services/service_order.ts'; // Ваша entity

class ProductService {
  private productRepository = service_order.getRepository(ServiceOrder);

  async create(productData: { id: number, check_time: TimeLike, check_date: Date, employee_checked: string, file_link: string, format: string, model_id: number, number_of_iterations: number, order_id: number, service_id: number }): Promise<ServiceOrder> {
    const product = this.productRepository.create(productData);

    await this.productRepository.save(product);

    return product;
  }

  async findOne(id: string): Promise<ServiceOrder> {
    const product = await this.productRepository.findOne({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async findAll(id: string): Promise<ServiceOrder> {
    const product = await this.productRepository.findAll({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async Update(id: string): Promise<ServiceOrder> {
    const product = await this.productRepository.Update({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async Delete(id: string): Promise<ServiceOrder> {
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