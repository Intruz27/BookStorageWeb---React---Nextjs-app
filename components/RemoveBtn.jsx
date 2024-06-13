"use client";

import { useRouter } from "next/navigation";
import React from 'react'

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeBook = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/books?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeBook} className="btn btn-outline-danger me-2 mb-2">
      Usuń
    </button>
  )
}

export default RemoveBtn