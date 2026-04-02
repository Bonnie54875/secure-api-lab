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