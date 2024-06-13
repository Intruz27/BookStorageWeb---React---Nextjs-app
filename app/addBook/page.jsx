"use client";

import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.css';

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !author || !type || !serialNumber || !location) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, author, type, description, serialNumber, location }),
      });
      console.log('JSON', JSON.stringify({ title, author, type, description, serialNumber, location }))

      if (res.ok) {
        router.push("/booksList");
      } else {
        throw new Error("Failed to create a book");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-12 py-5">
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-4 flex flex-col gap-3">
        <label className="mb-10">
          Tytuł:
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-500 px-3 py-2"
          type="text"
          placeholder="Tytuł"
        />

        <label className="mb-10">
          Autor:
        </label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          className="border border-slate-500 px-3 py-2"
          type="text"
          placeholder="Autor"
        />

        <label className="mb-10">
          Typ:
        </label>
        <input
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="border border-slate-500 px-3 py-2"
          type="text"
          placeholder="Typ"
        />

        <label className="mb-10">
          Opis:
        </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-500 px-3 py-2"
          type="text"
          placeholder="Opis"
        />

        <label className="mb-10">
          Numer seryjny:
        </label>
        <input
          onChange={(e) => setSerialNumber(e.target.value)}
          value={serialNumber}
          className="border border-slate-500 px-3 py-2"
          type="text"
          placeholder="Numer seryjny"
        />

        <label className="mb-10">
          Lokalizacja:
        </label>
        <input
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          className="border border-slate-500 px-3 py-2"
          type="text"
          placeholder="Lokalizacja"
        />

        <button
          type="submit"
          className="btn btn-outline-primary"
        >
          Zapisz
        </button>
      </form>
    </div>
  );
}

export default AddBook