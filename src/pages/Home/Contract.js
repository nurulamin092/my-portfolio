import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const Contract = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_hpavzy4', 'template_ughsips', form.current, '5ltVPwx4OQ4P-qb_N')
            .then((result) => {
                toast.success('Message send is successful')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>

            <form ref={form} onSubmit={sendEmail}>
                <div className=' px-10 py-14 bg-slate-900 rounded-3xl'>
                    <div className='text-center pb-14 text-white'>

                        <h1 className='text-4xl'> Contact Me</h1>
                    </div>
                    <div className='grid grid-cols-1 justify-items-center gap-5'>
                        <input
                            type='text'
                            name="user_name"
                            placeholder='Name'
                            className='input w-full max-w-md'
                        />
                        <input
                            type='email'
                            name="user_email"
                            placeholder='Email Address'
                            className='input w-full max-w-md'
                        />
                        <textarea
                            className='textarea w-full max-w-md'
                            name="message"
                            placeholder='Your message'
                            rows={6}
                        ></textarea>

                        <input className='btn btn-outline btn-secondary' type="submit" value="Send Message" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contract;