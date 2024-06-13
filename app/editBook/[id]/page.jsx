import React from 'react'
import EditBookForm from '@/components/EditBookForm'

const getBookById = async (id) => {
  console.log('id', id)
  console.log('i123d', `http://localhost:3000/api/books/${id}`)
    try {
      const res = await fetch(`http://localhost:3000/api/books/${id}`, {
        cache: "no-store",
      });
  
      console.log('res', res)

      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
      return res.json();
      
    } catch (error) {
      console.log(error);
    }
  };

const EditBook = async ({ params }) => {
    const { id } = params;
    const { book } = await getBookById(id);
    const { title, author, type, description, serialNumber, location } = book;
  
    return <EditBookForm id={id} title={title} author={author} type={type} description={description} serialNumber={serialNumber} location={location}/>;
}

export default EditBook