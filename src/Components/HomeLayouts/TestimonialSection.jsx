import React from 'react';

const blogs = [
  {
    title: "5 Tips for Living with a Roommate",
    excerpt: "Sharing a space doesn't have to be hard. Learn how to communicate, set boundaries, and enjoy living together.",
    date: "June 25, 2025",
  },
  {
    title: "How to Choose the Perfect Roommate",
    excerpt: "Budget, lifestyle, and habits — we break it all down to help you make the right match.",
    date: "June 20, 2025",
  },
];

const testimonials = [
  {
    quote: "This site helped me find a roommate within 3 days. The process was super smooth!",
    author: "Ayesha, Dhaka",
  },
  {
    quote: "Great filters and secure verification. I feel much safer now sharing a room.",
    author: "Rafi, Chattogram",
  },
];

const TestimonialSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 my-16 space-y-20">
      {/* Blog Section */}
      <div>
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-600">
          Latest Roommate Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer"
              role="article"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-5 line-clamp-3">{blog.excerpt}</p>
              <time className="text-sm text-gray-400 block">{blog.date}</time>
            </article>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div>
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-600">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testi, idx) => (
            <blockquote
              key={idx}
              className="border-l-4 border-blue-500 bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <p className="italic text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                “{testi.quote}”
              </p>
              <footer className="mt-4 text-right font-bold text-blue-700 dark:text-blue-400">
                — {testi.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
