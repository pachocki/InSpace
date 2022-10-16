import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2sx6l1f', 'template_eb1877e', form.current, 'Q3EqNhSYzF-QeWh4m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="flex flex-col gap-2 pb-10" ref={form} onSubmit={sendEmail}>
      <label><h2>Name</h2></label>
      <input className="rounded text-white font-bold px-2 py-2 bg-slate-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" name="user_name" />
      <label><h2>Email</h2></label>
      <input className="rounded text-white font-bold px-2 py-2 bg-slate-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"  type="email" name="user_email" />
      <label><h2>Message</h2></label>
      <textarea className="w-full text-white font-bold h-[20vh] px-2 py-2 bg-slate-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" name="message" plaveholder="Please Write Message to us"/>
      <button className="mt-4"><input type="submit" value="Send" /></button>
    </form>
  );
};
export default Contact