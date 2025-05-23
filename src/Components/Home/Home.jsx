import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import PostSection from '../PostSection/PostSection';
import { useLoaderData } from 'react-router';
import ServiceCulture from '../ServiceCulture/ServiceCulture';
import Success from '../Success/Success';

const Home = () => {
    const postData = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <PostSection postData={postData}></PostSection>
            <ServiceCulture></ServiceCulture>
            <Success></Success>
            <Faq></Faq>
        </div>
    );
};

export default Home;