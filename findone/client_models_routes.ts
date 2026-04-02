// src/routes/product.routes.ts
import { findOneProduct } from './findone_branch_info';
import { Router } from 'express';

export const productRoutes = Router();

productRoutes.get('/:id', findOneProduct);