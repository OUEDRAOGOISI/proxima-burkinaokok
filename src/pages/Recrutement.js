import React from 'react';
import Layout from "../components/Layout";
import emailjs from "emailjs-com";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

export default function Recrutement() {
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
        <div className="h-screen mt-2">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_tdblqwuw.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>  
              
        <div className='w-screen flex justify-center mt-2'>
          <form onSubmit={sendEmail}>
            <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50'>
                <h1 className='text-2xl font-semibold' >
                  <ul>
                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScwUKZwSQoZU5sy447n46RD5VTToAivprR6jMhojpwUEDaXZw/viewform">Cliquez sur ici pour vous enregistrer</a></li>
                  </ul>
                </h1>                           
            </div>
            
          </form>
        </div>
      </div>
    </Layout>
  );
}

