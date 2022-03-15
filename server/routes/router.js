import express from 'express';

import { getItems, createItem, deleteItem, updateItem } from '../controllers/controller.js'

const router = express.Router();

router.get('/', getItems);
router.post('/', createItem);
router.delete('/:id', deleteItem);
router.patch('/:id', updateItem);

export default router;