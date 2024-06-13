"use client";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const showBook = ({ id, title, author, type, description, serialNumber, location }) => {

    return (
        <form className="max-w-5xl mx-auto p-4 flex flex-col gap-3">

            <label className="mb-10">
                Tytuł:
            </label>
            <input
                value={title}
                readOnly="true"
                className="border border-slate-500 px-3 py-2"
                type="text"
                placeholder="Tytuł"
            />

            <label className="mb-10">
                Autor:
            </label>
            <input
                value={author}
                readOnly="true"
                className="border border-slate-500 px-3 py-2"
                type="text"
                placeholder="Autor"
            />

            <label className="mb-10">
                Typ:
            </label>
            <input
                value={type}
                readOnly="true"
                className="border border-slate-500 px-3 py-2"
                type="text"
                placeholder="Typ"
            />

            <label className="mb-10">
                Opis:
            </label>
            <input
                value={description}
                readOnly="true"
                className="border border-slate-500 px-3 py-2"
                type="text"
                placeholder="Opis"
            />

            <label className="mb-10">
                Numer seryjny:
            </label>
            <input
                value={serialNumber}
                readOnly="true"
                className="border border-slate-500 px-3 py-2"
                type="text"
                placeholder="Numer seryjny"
            />

            <label className="mb-10">
                Lokalizacja:
            </label>
            <input
                value={location}
                readOnly="true"
                className="border border-slate-500 px-3 py-2"
                type="text"
                placeholder="Lokalizacja"
            />
        </form>
    )
}

export default showBook