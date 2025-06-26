import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import PostSection from '../PostSection/PostSection';
import { useLoaderData } from 'react-router';
import ServiceCulture from '../ServiceCulture/ServiceCulture';
import Success from '../Success/Success';
import PromotionalOffer from '../HomeLayouts/PromotionalOffer';
import TestimonialSection from '../HomeLayouts/TestimonialSection';
import NewsletterSubscription from '../HomeLayouts/NewsletterSubscription';

const Home = () => {
    const postData = useLoaderData()

    return (
        <div>
            <Banner />               
            <PromotionalOffer />    
            <Success />           
            <PostSection postData={postData} />
            <ServiceCulture />    
            <TestimonialSection />  
            <NewsletterSubscription />
            <Faq />   
        </div>

    );
};

export default Home;