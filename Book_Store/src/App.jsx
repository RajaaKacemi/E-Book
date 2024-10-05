import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Books from './Pages/Books';
import ContactUs from './Components/ContactUs';
import BookDetails from './Components/BookDetails';

function App() {
  return (
    <>

        <Router>
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/" element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;
