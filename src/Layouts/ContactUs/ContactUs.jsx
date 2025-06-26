import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [darkBackground, setDarkBackground] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'Your message has been sent successfully.',
        confirmButtonColor: '#3085d6',
      });

      setSubmitted(true);
      setDarkBackground(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div
      className={`
        p-8 md:p-16 my-10 rounded-3xl shadow-lg
        text-gray-900
        transition-colors duration-500
        ${darkBackground
          ? 'bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300'
          : 'bg-gradient-to-br from-blue-200 via-orange-100 to-blue-200 dark:from-blue-200 dark:via-orange-100 dark:to-blue-200'
        }
      `}
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Have questions or need help? Send us a message and we’ll get back to you as soon as possible.
        </p>
      </div>

      {submitted ? (
        <div className="text-center text-green-600 text-xl font-semibold">
          Thank you for reaching out! We will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-md px-4 py-2 border border-gray-400 focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              placeholder="Your Email"
              className="w-full rounded-md px-4 py-2 border border-gray-400 focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              rows={5}
              className="w-full rounded-md px-4 py-2 border border-gray-400 focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full bg-gradient-to-r from-blue-500 to-orange-300 hover:from-blue-600 hover:to-orange-400 text-white transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
