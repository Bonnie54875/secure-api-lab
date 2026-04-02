const { models }  = require( '../services/models.js'); // Ваш DataSource
import { TimeLike } from 'fs';
import { Models } from '../services/models.ts'; // Ваша entity

class ProductService {
  private productRepository = models.getRepository(Models);

  async create(productData: { id: number, approved_state: boolean, name: string, description: string, file_link: string, model_used: number, uploaded_time: TimeLike, uploaded_date: Date }): Promise<Models> {
    const product = this.productRepository.create(productData);

    await this.productRepository.save(product);

    return product;
  }

  async findOne(id: string): Promise<Models> {
    const product = await this.productRepository.findOne({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async findAll(id: string): Promise<Models> {
    const product = await this.productRepository.findAll({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async Update(id: string): Promise<Models> {
    const product = await this.productRepository.Update({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async Delete(id: string): Promise<Models> {
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