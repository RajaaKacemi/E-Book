import Landing from '../Components/Landing';
import BestSellers from '../Components/BestSellers';
import Values from '../Components/Values';
import CustomerReviews from '../Components/CustomerReviews';
import ContactUs from '../Components/ContactUs';
import Newsletter from '../Components/Newsletter';

function Home() {
  return (
    <div className=''>
    <Landing />
    <BestSellers />
    <Values />
    <Newsletter />
    <CustomerReviews />
    <ContactUs />
    </div>
  );
}

export default Home;
