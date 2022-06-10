import React from 'react';
import Footer from '../Shared/Footer';
import About from './About';
import Banner from './Banner';
import Contract from './Contract';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;