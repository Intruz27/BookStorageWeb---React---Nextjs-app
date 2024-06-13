import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
    {
      title: String,
      description: String,
      title: String,
      author: String,
      type: String,
      description: String,
      serialNumber: String,
      location: String
    },
    {
      timestamps: true,
    }
  );
  
  const BookStorageWeb = mongoose.models.BookStorageWeb || mongoose.model("BookStorageWeb", bookSchema);
  
  export default BookStorageWeb;