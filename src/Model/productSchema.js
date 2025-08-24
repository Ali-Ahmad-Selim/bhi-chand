import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, default: "" },

    // Category with enum restriction (required)
    category: {
      type: String,
      required: true,
      enum: ["Undergarments", "Night Suit", "Men Purse", "Women Purse"],
    },

    // Size with enum restriction (optional)
    size: {
      type: String,
      enum: ["Small", "Medium", "Large", "Extra Large"],
      required: false, // optional (default behavior if not set)
    },

    // Cloudinary data
    imageUrl: { type: String, required: true },
    imagePublicId: { type: String, required: true },
  },
  { timestamps: true, collection: "products" }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
