import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  clientName: String,
    design: String,
    size: String,
    amount: {
      type: Number,
      default: 1
    },
    vinyl: String,
    due: Date
});

const OrderData = mongoose.model('orderData', orderSchema);

export default OrderData;