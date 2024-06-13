import React from 'react'
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import 'bootstrap/dist/css/bootstrap.css';


const getBooks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/books", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }
    console.log('res', res)
    return res.json();
  } catch (error) {
    console.log("Error loading books: ", error);
  }
};


const BooksList = async () => {
  const { books } = await getBooks();

  console.log('books', books)


  return (

    <div className="col-12 py-5">
        <div className="container">

          <div className="row">
            <>
              {books.map((t) => (
                // eslint-disable-next-line react/jsx-key
                <div className="c-col-8 col-md-6 col-lg-4 mt-3">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{t.title}</h4>
                      <h5 className="card-subtitle mb-2 text-body-secondary">{t.author}</h5>
                      <p className="card-title mb-2">{t.location}</p>
                    </div>
                    <div className="card-footer">

                      <Link className="btn btn-outline-primary me-2 mb-2" href={`/showBook/${t._id}`}>
                        Podgląd
                      </Link>
                      <Link className="btn btn-outline-secondary me-2 mb-2" href={`/editBook/${t._id}`}>
                        Edytuj
                      </Link>
                      <RemoveBtn id={t._id} />
                    </div>
                  </div>
                </div>
              ))}
            </>
          </div>
        </div>
      </div>


  );
}

export default BooksList