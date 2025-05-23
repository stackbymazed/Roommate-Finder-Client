import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import PostSection from '../PostSection/PostSection';
import { useLoaderData } from 'react-router';
import ServiceCulture from '../ServiceCulture/ServiceCulture';

const Home = () => {
    const postData = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <PostSection postData={postData}></PostSection>
            <ServiceCulture></ServiceCulture>
            <Faq></Faq>
        </div>
    );
};

export default Home;