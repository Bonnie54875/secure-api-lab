const { employee_branch_info }  = require( '../services/employee_branch_info.js'); // Ваш DataSource
import { EmployeeBranchInfo } from '../services/employee_branch_info.ts'; // Ваша entity

class ProductService {
  private productRepository = employee_branch_info.getRepository(EmployeeBranchInfo);

  async create(productData: { id: number, date_of_employment: Date, branch_id: number, employee_id: number }): Promise<EmployeeBranchInfo> {
    const product = this.productRepository.create(productData);

    await this.productRepository.save(product);

    return product;
  }

  async findOne(id: string): Promise<EmployeeBranchInfo> {
    const product = await this.productRepository.findOne({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async findAll(id: string): Promise<EmployeeBranchInfo> {
    const product = await this.productRepository.findAll({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async Update(id: string): Promise<EmployeeBranchInfo> {
    const product = await this.productRepository.Update({ where: { id } });



    if (!product) {
      const error = new Error(`Product with ID ${id} not found`);
      (error as any).status = 404;
      throw error;
    }

    return product;
  }

  async Delete(id: string): Promise<EmployeeBranchInfo> {
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