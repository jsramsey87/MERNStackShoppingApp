import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  clientName: String,
    design: String,
    size: String,
    amount: {
      type: Number,
      default: 1
    }
});

const orderData = mongoose.model('orderData', orderSchema);

export default orderData;