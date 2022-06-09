import React from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../assets/images/Background.png';
const Banner = () => {

    return (
        <div>
            <div>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img className='rounded-full' src={img6} alt='' />
                        <div>
                            <h1 class="text-5xl font-bold">Welcome To My Website</h1>
                            <p class="py-6"> I'm A Web Developer & Mern Stack</p>
                            {/* <button class="btn btn-primary">Get Started</button> */}
                            {/* <Link to="https://drive.google.com/file/d/1_vU3PAib9XKVxxA4ubyFn-GVaWihHECj/view?usp=sharing">Download Resume</Link> */}
                            <a href='https://drive.google.com/file/d/1_vU3PAib9XKVxxA4ubyFn-GVaWihHECj/view?usp=sharing' target='_blank'> <button className='btn btn-primary'>Download Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;