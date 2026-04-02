// src/routes/product.routes.ts
import { findOneProduct } from './findone_client_order';
import { Router } from 'express';

export const productRoutes = Router();

productRoutes.get('/:id', findOneProduct);