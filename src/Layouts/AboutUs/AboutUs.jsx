import React from 'react';

const AboutUs = () => {
  return (
    <div
      className="
        p-8 md:p-16 my-10 rounded-3xl shadow-lg
        bg-gradient-to-br 
          from-pink-200 via-indigo-100 to-green-200 
        dark:from-blue-200 dark:via-orange-100 dark:to-blue-200
        text-black
      "
      style={{ transition: 'background 0.5s ease' }}
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">About Roommate Finder</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Roommate Finder is your go-to platform for finding trusted roommates and comfortable living spaces.
          Whether you're looking to share your flat or find a new place to stay, we make it simple, safe, and fast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🌟 Our Mission</h2>
          <p className="text-base leading-relaxed">
            We aim to connect people who are searching for affordable housing and reliable roommates.
            Everyone deserves a home where they feel comfortable and respected — and we're here to help make that happen.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🔒 Safe & Verified</h2>
          <p className="text-base leading-relaxed">
            Your safety is our priority. All listings and users are reviewed to ensure a safe and respectful environment.
            You can trust the people you're connecting with.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🚀 Easy to Use</h2>
          <p className="text-base leading-relaxed">
            Posting, searching, and communicating is super easy. With a few clicks, you can list your room or find your ideal match.
            Our design is clean, mobile-friendly, and simple for everyone to use.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🌍 Community First</h2>
          <p className="text-base leading-relaxed">
            We believe in building a supportive and diverse community. Whether you're a student, working professional,
            or someone new in town — you'll find your place here.
          </p>
        </div>
      </div>

      <div className="text-center mt-14">
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p className="text-base">
          Reach out to us anytime at{' '}
          <a
            href="majedulislam223311@gmail.com"
            className="underline text-black-200 hover:text-orange-100"
          >
            majedulislam223311@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
