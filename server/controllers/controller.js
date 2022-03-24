import express from 'express';
import mongoose from 'mongoose';
import OrderData from '../models/model.js'
import { response } from "express";

const router = express.Router();

export const getOrders = async (req, res) => {
  try {
    const allOrders = await OrderData.find();
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(404).json({message: error.message});
    console.log(error);
  }
}

export const createOrder = async (req, res) => {
  const { clientName, design, size, amount, vinyl, due} = req.body;
  const newOrder = new OrderData({ clientName, design, size, amount, vinyl, due })
try {
    await newOrder.save();
    res.status(201).json(newOrder); 
  } catch (error) {
    res.status(409).json({message: error.message});
    console.log(error)
  }
}

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { clientName, design, size, amount } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  const updatedOrder = { clientName, design, size, amount, vinyl, due, _id: id };
  await OrderData.findByIdAndUpdate(id, updatedOrder, { new: true });
  res.json(updatedOrder);
}

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  await OrderData.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully." });
}

export default router;