import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    

    if (!formData.email || !formData.message) {
        setError("Email and Message are required.");
        return;
    }

    fetch("https://formcarry.com/s/_TLKKWOVu-", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({ email: formData.email, name: formData.name, message: formData.message })
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


const notifySuccess = () => {
  Swal.fire({
    title: 'Subscribed!',
    text: 'You have message send successfully.',
    icon: 'success',
    button: 'OK',
  }).then(() => {
    setSubmitted(false); 
    setFormData(''); 
    setError(''); 
    navigate('/home');
  });
};

  if (submitted) {
    notifySuccess();
  }


  return (
    <div className="isolate bg-beige px-6 py-10 sm:py-24 lg:px-8" id="contactUs">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-Brown sm:text-4xl">Contact Us</h2>
      </div>
      <form onSubmit={onSubmit} className="mx-auto mt-0 max-w-xl sm:mt-6">
        <div className="font-bold grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="full-name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="organization"
                className="bg-LightBeige placeholder-Brown block w-full rounded-lg border-0 px-10 py-4 text-Brown shadow-sm ring-1 ring-inset ring-LightBeige focus:ring-2 focus:ring-inset focus:ring-Brown sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="bg-LightBeige placeholder-Brown block w-full rounded-lg border-0 px-10 py-4 text-Brown shadow-sm ring-1 ring-inset ring-LightBeige focus:ring-2 focus:ring-inset focus:ring-Brown sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phoneNumber"
                id="phone-number"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                autoComplete="tel"
                className="bg-LightBeige placeholder-Brown block w-full rounded-lg border-0 px-10 py-4 text-Brown shadow-sm ring-1 ring-inset ring-LightBeige focus:ring-2 focus:ring-inset focus:ring-Brown sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                placeholder="Type a message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-LightBeige placeholder-Brown block w-full rounded-lg border-0 px-10 py-6 text-Brown shadow-sm ring-1 ring-inset ring-LightBeige focus:ring-2 focus:ring-inset focus:ring-Brown sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-lg bg-Brown px-10 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring-Brown"
          >
            Send
          </button>
        </div>
        {error && <p className="text-brown mt-4">*{error}</p>}
      </form>
    </div>
  );
}
