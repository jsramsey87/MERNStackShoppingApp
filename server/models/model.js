import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  itemName: String,
  check: Boolean,
  amount: {
    type: Number,
    default: 0
  }
});

const itemData = mongoose.model('itemData', itemSchema);

export default itemData;