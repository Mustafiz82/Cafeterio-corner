import React from 'react';
import { Banner } from '../Component/Banner';
import BestFoods from '../Component/BestFoods';
import FAQ from '../Component/FAQ';
import ContackUs from '../Component/ContackUs';
import Footer from '../Component/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestFoods></BestFoods>
            <FAQ></FAQ>
            <ContackUs></ContackUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;