import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import emailjs from "emailjs-com";
import{ init } from '@emailjs/browser';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

  emailjs.sendForm('service_bbkbihl', 'template_wcp2qdw', e.target, 'user_AAVjynR77JFI7lHTBFlSZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <Layout>
      <div>
        <div className="h-screen mt-10">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_8tmvgkde.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>        
        <div className='w-screen flex justify-center mt-10'>
          <form onSubmit={sendEmail}>
            <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50'>
                <h1 className='text-2xl font-semibold'>Contacter nous pour plus d'informations</h1>
                <input type="text" placeholder='Nom' name='fullName' required className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'/>
                <input type="text" placeholder='Telephone' name='phone' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'/>
                <input type="text" placeholder='Email' name='email' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'/>
                <textarea type="text" placeholder='Message' name='message' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'/>
                  
                  <button className='bg-red-500 rounded text-white px-5 py-1 mt-3'>VALIDER</button>
          
            </div>
          </form>
        </div>
        
      </div>
    </Layout>
  );
}

