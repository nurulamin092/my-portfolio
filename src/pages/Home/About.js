import React from 'react';
import img1 from '../../assets/images/img1.png';

const About = () => {
    return (
        <div className='bg-stone-900 px-12 py-12 my-10 text-white rounded-3xl'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img className='rounded-4xl' src={img3} alt='' /> */}
                    <div>
                        <img src={img1} className="max-w-sm rounded-full shadow-2xl" alt='' />
                        <div className='text-center'>
                            <h3 className="text-3xl font-bold my-3 tect"> Nurul Amin</h3>
                            <h3 className="text-2xl "> Web developer</h3>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-5xl text-center'>About Us</h1>
                        <p className="py-6">I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</p>
                        <h2 className='text-4xl my-3 font-bold'>Personal Info</h2>
                        <h3 className="text-2xl "> Name: Nurul Amin</h3>

                        <p>Phone: +8801817677741</p>
                        <p>Email: mnurulamin092@outlook.com</p>

                        <button className="btn btn-primary">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;