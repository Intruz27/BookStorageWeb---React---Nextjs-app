import connectMongoDB from "@/libs/mongodb";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newAuthor: author, newType: type, newDescription: description, newSerialnumber: serialNumber, newLocation: location } = await request.json();
  await connectMongoDB();
  await Book.findByIdAndUpdate(id, { title, author, type, description, serialNumber, location });
  return NextResponse.json({ message: "Book updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const book = await Book.findOne({ _id: id });
  return NextResponse.json({ book }, { status: 200 });
}