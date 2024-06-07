import { useState } from 'react';
import backgroudImage from "../assets/images/pexels-wendelmoretti-18500221.png";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/accounts/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      if (response.ok) {
        setError(null);
        Swal.fire({
          title: 'Success!',
          text: 'Account created successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      } else {
        setError(data.error);
        Swal.fire({
          title: 'Error!',
          text: data.error,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      Swal.fire({
        title: 'Error!',
        text: 'An unexpected error occurred. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error('Fetch error:', err);
    }
  };

  return (
    <div className="px-8 relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroudImage})` }}>
      <div className="flex justify-center items-center h-full">
        <div className="relative bg-white px-10 py-6 sm:py-18 lg:px-8 z-10 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-Brown sm:text-3xl">Sign up</h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="font-semibold bg-LightBeige placeholder-Brown block w-full rounded-lg border-0 px-4 py-4 text-Brown shadow-sm ring-1 ring-inset ring-LightBeige focus:ring-2 focus:ring-inset focus:ring-Brown sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="font-semibold bg-LightBeige placeholder-Brown block w-full rounded-lg border-0 px-4 py-4 text-Brown shadow-sm ring-1 ring-inset ring-LightBeige focus:ring-2 focus:ring-inset focus:ring-Brown sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="font-semibold bg-LightBeige placeholder-Brown block w-full rounded-lg border-0 px-4 py-4 text-Brown shadow-sm ring-1 ring-inset ring-LightBeige focus:ring-2 focus:ring-inset focus:ring-Brown sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="font-semibold bg-LightBeige placeholder-Brown block w-full rounded-lg border-0 px-4 py-4 text-Brown shadow-sm ring-1 ring-inset ring-LightBeige focus:ring-2 focus:ring-inset focus:ring-Brown sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {error && <div className="mt-4 text-center text-red-600">{error}</div>}
            <div className="mt-8">
              <button
                type="submit"
                className="block w-full rounded-lg bg-Brown px-4 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring-Brown"
              >
                Sign up
              </button>
            </div>
            <div className="mt-4 text-center text-sm text-Brown font-semibold">
              Already have an account? <Link to="/login" className="text-orange hover:underline">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
