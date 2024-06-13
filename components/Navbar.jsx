import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold mr-5" href={"/"}>
        BookStorageWeb.
      </Link>
      <Link className="text-white p-2" href={"/booksList"}>
        Lista pozycji
      </Link>
      <Link className="text-white p-2" href={"/addBook"}>
        Dodaj pozycję
      </Link>
    </nav>
  )
}

export default Navbar