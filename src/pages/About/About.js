import React from 'react';
import img1 from '../../assets/images/img1.png';

const About = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    {/* <img className='rounded-4xl' src={img3} alt='' /> */}
                    <div>
                        <img src={img1} class="max-w-sm rounded-full shadow-2xl" alt='' />
                        <div className='text-center'>
                            <h3 class="text-3xl font-bold my-3 tect"> Nurul Amin</h3>
                            <h3 class="text-2xl "> Web developer</h3>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-5xl text-center'>About Us</h1>
                        <p class="py-6">I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</p>
                        <h2 className='text-4xl my-3 font-bold'>Personal Info</h2>
                        <h3 class="text-2xl "> Name: Nurul Amin</h3>

                        <p>Phone: +8801817677741</p>
                        <p>Email: mnurulamin092@outlook.com</p>

                        <button class="btn btn-primary">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;