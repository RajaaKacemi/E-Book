
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import './App.css';
import './index.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
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
