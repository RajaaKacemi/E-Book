import BookList from "../Components/BookList";
import SearchBar from "../Components/SearchBar";
import backgroudImage from "../assets/images/pexels-wendelmoretti-18500221.png";
import { AppProvider } from '../context';

function Books() {
  return (
    <AppProvider> 
    <div className='bg-Brown h-fit'>

      <div
        className="searchSection h-3/5 flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${backgroudImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >

        <h1 className="text-3xl font-bold text-white sm:text-4xl mb-4 text-center py-14">Find your book</h1>
        
        <SearchBar />
      </div>
      <BookList />
      
    </div>
    </AppProvider>
  );
}

export default Books;
