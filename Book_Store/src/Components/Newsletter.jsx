import Swal from 'sweetalert2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const notifySuccess = () => {
    Swal.fire({
      title: 'Subscribed!',
      text: 'You have successfully subscribed to our newsletter.',
      icon: 'success',
      button: 'OK',
    }).then(() => {
      setSubmitted(false); 
      setEmail(''); 
      setError(''); 
      navigate('/home');
    });
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();
    

    if (!email ) {
        setError("Email is required.");
        return;
    }

    fetch("https://formcarry.com/s/_TLKKWOVu-", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({ email: email})
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.code === 200) {
            setSubmitted(true);
        } else {
            setError(res.message);
        }
    })
    .catch((error) => setError(error));
}


  if (submitted) {
    notifySuccess();
  }

  return (
    <section className="text-center py-20 px-10 bg-orange">
      <h1 className="py-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-beige lg:pb-10 lg:py-6 sm:py-4 lg:px-6">
        Subscribe to our newsletter for newest books updates
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleChange}
          className="font-semibold py-4 px-8 w-full sm:w-2/3 max-w-lg rounded-lg bg-LightBeige placeholder-Brown text-Brown focus:outline-none"
        />
        <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-Brown text-beige font-semibold rounded-lg hover:bg-LightBeige hover:text-orange ease-in duration-300">
          Subscribe
        </button>
      </form>
      {error && <p className="text-beige mt-4 mr-80 pr-20">*{error}</p>}
    </section>
  );
}

export default Newsletter;
