import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  mobile: String,
  tablet: String,
  desktop: String,
});

const includesSchema = new mongoose.Schema({
  quantity: Number,
  item: String,
});

const gallerySchema = new mongoose.Schema({
  first: imageSchema,
  second: imageSchema,
  third: imageSchema,
});

const othersSchema = new mongoose.Schema({
  slug: String,
  name: String,
  image: imageSchema,
});

const productsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  slug: String,
  name: String,
  image: imageSchema,
  category: String,
  categoryImage: imageSchema,
  new: Boolean,
  price: Number,
  description: String,
  features: String,
  includes: [includesSchema],
  gallery: gallerySchema,
  others: [othersSchema],
});


const Pool =
  mongoose.models.product || mongoose.model('product', productsSchema);


export default  Pool ;
