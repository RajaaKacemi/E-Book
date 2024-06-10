import { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function BestSellers() {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/accounts/bestSellers/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBestSellers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        print("hi")
        setLoading(false);
      });
  }, []);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="text-center p-10 bg-white">
      <div className="text-Brown flex w-full justify-between text-customBrown mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold">BestSellers</h1>
        <h6 className="text-xl sm:text-2xl font-medium">See all</h6>
      </div>
      
      <div className="flex justify-between space-x-6 overflow-x-auto">
        {bestSellers.length > 0 && bestSellers.map((sell, index) => (
          <div key={index} className="flex flex-col items-start p-4  rounded-lg w-64 text-Brown">
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <img src={sell.image} alt={sell.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between w-full mt-4">
              <h2 className="text-start text-lg  truncate w-36">{sell.title}</h2>
              <p className="text-lg font-semibold">{sell.price}DH</p>
            </div>
            <div className="flex mt-2">
              {renderStars(sell.ratings)}
            </div>
            <div className="mt-2 ">By: {sell.autor}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;
