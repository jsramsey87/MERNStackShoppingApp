import express from 'express';

import { getOrders, createOrder, deleteOrder, updateOrder } from '../controllers/controller.js'

const router = express.Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.delete('/:id', deleteOrder);
router.patch('/:id', updateOrder);

export default router; 