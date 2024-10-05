
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const reviews = [
  {
    name: "Ahmed Ahmed",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 4.5,
    image: "https://res.cloudinary.com/dfin3vmgz/image/upload/v1717791442/Frame_59_r4ouq0.png"
  },
  {
    name: "Ahmed Ahmed",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 4.0,
    image: "https://res.cloudinary.com/dfin3vmgz/image/upload/v1717791442/Ellipse_1_hzpcgu.png"
  },
  {
    name: "Ahmed Ahmed",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 4.5,
    image: "https://res.cloudinary.com/dfin3vmgz/image/upload/v1717791442/Ellipse_hvfzb0.png"
  }
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }
  return stars;
};

function CustomerReviews() {
  return (
    <section className="text-center py-10 px-4 bg-Brown sm:py-20 sm:px-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-beige mb-6">What our users say about us</h1>
      <div className="bg-beige rounded-lg p-4 sm:p-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center justify-between mb-4 py-4 px-4 sm:px-6 lg:px-10 rounded-lg">
            <div className="flex items-center mb-4 lg:mb-0">
              <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full mr-4 sm:mr-6" />
              <div className="text-Brown text-start">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-3">{review.name}</h3>
                <p className="text-sm sm:text-base font-thin">{review.text}</p>
              </div>
            </div>
            <div className="flex items-center text-yellow mt-2 lg:mt-0">
              {renderStars(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
