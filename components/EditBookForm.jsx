"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const editBookForm = ({ id, title, author, type, description, serialNumber, location }) => {
  console.log('title', title)
  console.log('author', author)
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newType, setNewType] = useState(type);
  const [newDescription, setNewDescription] = useState(description);
  const [newSerialNumber, setNewSerialNumber] = useState(serialNumber);
  const [newLocation, setNewLocation] = useState(location);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newAuthor, newType, newDescription, newSerialNumber, newLocation }),
      });

      if (!res.ok) {
        throw new Error("Failed to update book");
      }

      router.refresh();
      router.push("/booksList");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-4 flex flex-col gap-3">
      <label className="mb-10">
        Tytuł:
      </label>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-3 py-2"
        type="text"
        placeholder="Tytuł"
      />

      <label className="mb-10">
        Autor:
      </label>
      <input
        onChange={(e) => setNewAuthor(e.target.value)}
        value={newAuthor}
        className="border border-slate-500 px-3 py-2"
        type="text"
        placeholder="Autor"
      />

      <label className="mb-10">
        Typ:
      </label>
      <input
        onChange={(e) => setNewType(e.target.value)}
        value={newType}
        className="border border-slate-500 px-3 py-2"
        type="text"
        placeholder="Typ"
      />

      <label className="mb-10">
        Opis:
      </label>
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-3 py-2"
        type="text"
        placeholder="Opis"
      />

      <label className="mb-10">
        Numer seryjny:
      </label>
      <input
        onChange={(e) => setNewSerialNumber(e.target.value)}
        value={newSerialNumber}
        className="border border-slate-500 px-3 py-2"
        type="text"
        placeholder="Numer seryjny"
      />

      <label className="mb-10">
        Lokalizacja:
      </label>
      <input
        onChange={(e) => setNewLocation(e.target.value)}
        value={newLocation}
        className="border border-slate-500 px-3 py-2"
        type="text"
        placeholder="Lokalizacja"
      />

      <button
        className="btn btn-outline-primary"
      >
        Aktualizuj dane
      </button>
    </form>
  )
}

export default editBookForm