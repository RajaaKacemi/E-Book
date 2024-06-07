import BestSeller from "../Data/BestSeller.json";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function BestSellers() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow" />);
      }
    }
    return stars;
  };

  return (
    <section className="text-center p-10 bg-white">
      <div className="text-Brown flex w-full justify-between text-customBrown mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold">BestSellers</h1>
        <h6 className="text-xl sm:text-2xl font-medium">See all</h6>
      </div>
      
      <div className="flex justify-between space-x-6 overflow-x-auto">
        {BestSeller.length > 0 && BestSeller.map((sell, index) => (
          <div key={index} className="flex flex-col items-start p-4  rounded-lg w-64 text-Brown">
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <img src={sell.image} alt={sell.BookName} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between w-full mt-4">
              <h2 className="text-start text-lg  truncate w-36">{sell.BookName}</h2>
              <p className="text-lg font-semibold">{sell.price}</p>
            </div>
            <div className="flex mt-2">
              {renderStars(sell.ratings)}
            </div>
            <div className="mt-2 ">By: {sell.Author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;
