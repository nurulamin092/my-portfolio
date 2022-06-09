import React from 'react';
import img6 from '../../assets/images/Background.png';
const Banner = () => {

    return (
        <div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img className='rounded-full' src={img6} alt='' />
                        <div>
                            <h1 className="text-5xl font-bold">Welcome To My Website</h1>
                            <p className="py-6"> I'm A Web Developer & Mern Stack</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
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