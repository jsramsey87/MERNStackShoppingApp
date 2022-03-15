import express from 'express';
import mongoose from 'mongoose';
import itemData from '../models/model.js'
import { response } from "express";

const router = express.Router();

export const getItems = async (req, res) => {
  try {
    const allItems = await itemData.find();
    res.status(200).json(allItems);
  } catch (error) {
    res.status(404).json({message: error.message});
    console.log(error);
  }
}

export const createItem = async (req, res) => {
  const { itemName, check, amount } = req.body;
  const newItem = new itemData({ itemName, check, amount })
try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({message: error.message});
    console.log(error)
  }
}

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const { itemName, check, amount } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  const updatedItem = { itemName, check, amount, _id: id };
  await itemData.findByIdAndUpdate(id, updatedItem, { new: true });
  res.json(updatedItem);
}

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  await itemData.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully." });
}

export default router;