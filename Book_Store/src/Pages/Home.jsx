import Landing from '../Components/Landing';
import CustomerReviews from '../Components/CustomerReviews';
import ContactUs from '../Components/ContactUs';
import Newsletter from '../Components/Newsletter';

function Home() {
  return (
    <div className=''>
    <Landing />
    <Newsletter />
    <CustomerReviews />
    <ContactUs />
    </div>
  );
}

export default Home;
