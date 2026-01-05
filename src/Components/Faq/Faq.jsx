import React from 'react';

const Faq = () => {
    const faqData = [
        {
            question: 'How do I find a compatible roommate?',
            answer:
                'Create a profile set your preferences (budget, lifestyle, location), and we’ll show you compatible roommates based on your criteria.',
        },
        {
            question: 'Can I post my own room or apartment? ',
            answer:
                'Yes! You can list your available room or apartment with photos, rent details, and a description. Others can contact you directly.',
        },
        {
            question: 'What should I include in my roommate profile? ',
            answer:
                'Mention your routine, cleanliness, smoking habits, pet-friendliness, social habits, and ideal roommate type for better matching.',
        },
        {
            question: ' Can I find someone to search for a place together?',
            answer:
                ' Yes. You can connect with others who haven’t found a place yet and team up to find an apartment based on shared needs.',
        },
        {
            question: 'How do I stay safe while finding a roommate online?',
            answer:
                'Use in-app chat, avoid sharing personal info early, meet in public, and check verifications and reviews to stay safe.',
        },
    ];
    return (
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 rounded-2xl">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                    Frequently Asked Questions
                </h1>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="collapse collapse-arrow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md"
                        >
                            <input type="radio" name="faq-accordion" />
                            <div className="collapse-title font-semibold text-gray-800 dark:text-white">
                                {faq.question}
                            </div>
                            <div className="collapse-content text-sm text-gray-600 dark:text-gray-300">
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Faq;
