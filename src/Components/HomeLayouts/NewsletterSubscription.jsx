import React from 'react';
import { FiMail } from 'react-icons/fi';

const NewsletterSubscription = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 py-16 px-6 rounded-2xl shadow-lg transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-900 dark:text-white">
          📬 Stay in the Loop!
        </h2>
        <p className="mb-8 text-blue-800 dark:text-blue-300 text-lg max-w-2xl mx-auto">
          Get exclusive roommate tips, housing updates, and special offers — straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full sm:w-[400px]">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 dark:text-blue-300" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full pl-12 pr-4 py-3 rounded-md text-blue-900 dark:text-white bg-white dark:bg-blue-950 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
