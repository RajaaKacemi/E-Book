import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cover_img from "../assets/images/cover_not_found.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : cover_img,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
      } catch (error) {
        console.log(error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <p className='text-center'>Loading...</p>;

  return (
    <section className='bg-gray-100 min-h-screen p-6'>
      <div className='container mx-auto'>
        <button
          type='button'
          className='flex items-center text-blue-500 hover:text-blue-700 mb-4'
          onClick={() => navigate("/books")}
        >
          <FaArrowLeft size={22} className="mr-2 text-Brown" />
          <span className='font-semibold text-Brown'>Go Back</span>
        </button>

        {book ? (
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='book-details-img'>
              <img src={book.cover_img} alt="cover img" className='w-full h-auto rounded-lg shadow-lg' />
            </div>
            <div className='book-details-info bg-white p-6 rounded-lg shadow-lg'>
              <h1 className='text-3xl font-bold mb-2 text-orange'>{book.title}</h1>
              <p className='mb-2'><strong>Description:</strong> {book.description}</p>
              <div className='mb-2'>
                <strong className='font-semibold'>Subject Places:</strong>
                <span className='italic'> {book.subject_places}</span>
              </div>
              <div className='mb-2'>
                <strong className='font-semibold'>Subject Times: </strong>
                <span className='italic'>{book.subject_times}</span>
              </div>
              <div className='mb-2'>
                <strong className='font-semibold'>Subjects: </strong>
                <span>{book.subjects}</span>
              </div>
            </div>
          </div>
        ) : (
          <h2 className='text-center text-xl font-semibold mt-6'>Book not found</h2>
        )}
      </div>
    </section>
  );
}

export default BookDetails;
