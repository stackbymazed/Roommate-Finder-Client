import React from 'react';

const Faq = () => {
    return (
        <div className='bg-gray-100 pt-5 rounded-2xl pb-20'>
            <h1 className='text-2xl font-semibold my-4 justify-center flex items-center'>
                Frequently Asked Questions
            </h1>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">
                    How do I find a compatible roommate?
                </div>
                <div className="collapse-content text-sm">
                    Simply create a profile, set your preferences (like budget, lifestyle, and location), and our system will show you the most compatible roommate options based on your criteria.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">
                    Can I post my own room or apartment?
                </div>
                <div className="collapse-content text-sm">
                    Yes! You can list your available room or apartment by providing photos, rent details, and a short description. Interested users can contact you directly through the platform.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">
                    What kind of details should I include in my roommate profile?
                </div>
                <div className="collapse-content text-sm">
                    Include your daily routine, cleanliness habits, smoking preference, pet-friendliness, social habits, and your ideal roommate type. This helps others know if you'd be a good match.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">
                    Can I connect with someone to find a place together?
                </div>
                <div className="collapse-content text-sm">
                    Yes. If you don’t have a place yet, you can find others in the same situation. You can connect, chat, and search for apartments together based on mutual preferences.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">
                    How do I stay safe while finding a roommate online?
                </div>
                <div className="collapse-content text-sm">
                    Always chat through the app first, avoid sharing sensitive personal info too early, and try to meet in public places. We also recommend reviewing profile verifications and ratings.
                </div>
            </div>
        </div>
    );
};

export default Faq;
