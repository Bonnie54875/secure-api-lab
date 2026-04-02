// src/dto/ProductResponseDTO.ts
import { EmployeeBranchInfo } from '../services/employee_branch_info.ts';

export class ProductResponseDTO {
  id: number;
  branch_id: number;
  employee_id: number;
  date_of_employement: Date;

  constructor(employeeBranchInfo: EmployeeBranchInfo) {
    this.id = employeeBranchInfo.id;
    this.branch_id = employeeBranchInfo.branch_id;
    this.employee_id = employeeBranchInfo.employee_id;
    this.date_of_employement = employeeBranchInfo.date_of_employment;
  }
}