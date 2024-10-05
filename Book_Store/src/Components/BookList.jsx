import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const BookList = () => {
    const { books, loading, resultTitle } = useGlobalContext();

    // Display loading message while data is being fetched
    if (loading) {
        return <h2>Loading...</h2>;
    }

    // Display message when no books are available
    if (!books || books.length === 0) {
        return <h2>No books available</h2>;
    }

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4 p-3'>{resultTitle}:</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-screen p-6">
                {books.map((book) => {
                    // Sanitize the book ID to remove `/works/` part
                    const bookId = book.id.split('/').pop();
                    const coverImg = book.cover_id
                        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
                        : '/images/cover_not_found.jpg';

                    return (
                        <Link 
                            to={`/book/${bookId}`} 
                            key={bookId} // Use bookId as the key for better uniqueness
                            className="block bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-center">
                                <div className='book-item-img'>
                                    <img 
                                        src={coverImg} 
                                        alt="Book cover" 
                                        onError={(e) => { 
                                            e.target.onerror = null; 
                                            e.target.src = '/images/cover_not_found.jpg'; 
                                        }} 
                                        className="mb-4 h-48 w-auto mx-auto"
                                    />
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                                <p className="text-gray-600">
                                    <strong>Author:</strong> {book.author?.join(', ') || 'Unknown'}
                                </p>
                                <p><strong>First Published:</strong> {book.first_publish_year || 'N/A'}</p>
                                <p><strong>Editions:</strong> {book.edition_count || 0}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default BookList;
