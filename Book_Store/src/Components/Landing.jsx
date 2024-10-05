import library from "../assets/images/Man_hand.png";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col h-screen lg:flex-row text-center p-6 sm:py-6 sm:pl-6 sm:pr-0 lg:pr-0 overflow-hidden bg-beige">
      <div className="text-start p-6 w-full lg:w-2/4">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4" style={{ lineHeight: '1.5' }}>
          Find Your Next Book
        </h1>
        <p className=" text-lg sm:text-2xl lg:text-3xl mb-8 ">
          Looking for free digital books? Look no further than Book Info!
        </p>
        <button className="bg-Brown text-white px-8 py-4 sm:px-12 sm:py-5 font-semibold rounded-lg hover:bg-yellow ease-in duration-300" onClick={()=>{navigate("/books");}}>
          Explore Now
        </button>
      </div>
      <div className="ltr relative w-full lg:w-1/2 h-auto sm:h-full flex items-end justify-end lg:mt-20 sm:mr-[-4rem] pt-10 sm:pt-0">
        <img src={library} alt="library_books" className="w-full lg:w-full lg:h-full object-cover rounded-lg sm:rounded-s-lg lg:rounded-s-lg lg:max-h-full max-w-none" />
      </div>
    </section>
  );
}

export default Landing;
