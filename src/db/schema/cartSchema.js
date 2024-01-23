const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  mobile: String,
  tablet: String,
  desktop: String,
});

const cartItemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: imageSchema,
  name: String,
  slug: String,
  price: Number,
  email: String,
  quantity: Number,
});

const CartPool =
  mongoose.models.cartitem || mongoose.model('cartitem', cartItemSchema);

export { CartPool };
