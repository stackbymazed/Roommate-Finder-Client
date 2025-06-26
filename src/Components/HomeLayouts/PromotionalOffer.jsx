import React from 'react';
import { Link } from 'react-router';

const PromotionalOffer = () => {
  return (
    <section
      className="bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#0D9488]
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-950
      text-white py-16 px-6 sm:px-10 lg:px-20
      rounded-2xl max-w-[1200px] mx-auto my-16 shadow-xl relative overflow-hidden transition-all duration-500"
    >
      {/* Glowing Decorative Circles */}
      <span className="absolute -top-20 -left-20 w-48 h-48 bg-cyan-300 opacity-10 rounded-full blur-3xl animate-pulse"></span>
      <span className="absolute -bottom-24 -right-24 w-56 h-56 bg-blue-300 opacity-10 rounded-full blur-3xl animate-pulse"></span>

      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md tracking-wide">
          🎉 Limited Time Premium Offer!
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-blue-100 dark:text-gray-300 leading-relaxed">
          Unlock <span className="underline decoration-white decoration-2 font-semibold">Premium Features</span> for <span className="font-bold">30 Days FREE</span> —
          faster matches, smarter filters, and better roommate experiences.
        </p>

        <Link to="/signup" aria-label="Claim your premium offer">
          <button
            type="button"
            className="bg-white text-blue-700 hover:bg-blue-100 font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition duration-300"
          >
            Claim Your Offer
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PromotionalOffer;
