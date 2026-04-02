// src/dto/ProductResponseDTO.ts
import { Branch } from '../services/branch_info.ts';

export class ProductResponseDTO {
  id: number;
  address: string;

  constructor(BranchInfo: Branch) {
    this.id = BranchInfo.id;
    this.address = BranchInfo.address;
  }
}