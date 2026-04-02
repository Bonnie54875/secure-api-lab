// src/routes/product.routes.ts
import { findOneProduct } from './findone_order_models';
import { Router } from 'express';

export const productRoutes = Router();

productRoutes.get('/:id', findOneProduct);