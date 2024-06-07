import { useState } from 'react';
import backgroudImage from "../assets/images/pexels-wendelmoretti-18500221.png";
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    try {
      const response = await fetch('http://127.0.0.1:8000/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      if (response.ok) {
        setError(null);
        alert('Login successful.');
        
      } else {
        setError(data.error);
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="px-8 relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroudImage})` }}>
      <div className="flex justify-center items-center h-full">
        <div className="relative bg-white px-10 py-10 sm:py-18 lg:px-8 z-10 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-Brown sm:text-3xl">Log in</h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-4">
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
            </div>
            {error && <div className="mt-4 text-center text-red-600">{error}</div>}
            <div className="mt-8">
              <button
                type="submit"
                className="block w-full rounded-lg bg-Brown px-4 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring-Brown"
              >
                Log in
              </button>
            </div>
            <div className="mt-4 text-center text-sm text-Brown font-semibold">
            Don&apos;t have an account? <Link to="/signup" className="text-orange hover:underline">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
