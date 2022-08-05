import React from 'react'
import './contact.css'
import Heading from '../../Components/Heading/Heading'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine,RiWhatsappLine} from 'react-icons/ri'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const submitHandler= (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uim26y3', 'template_0wfdchf',e.target, 'METarznfUdvKkL6kt')
    .then((result) => {
       alert("Message Sent");
    }, (error) => {
        alert(error.text);
    });
    e.target.reset();

  }
  return (
    <div id="contact" className="container">
      <Heading preHeading="get in touch" heading='contact us' />
     <div className="contact-box">
     <div className="contact-links">
      <div className="contact-link-box">
         <div className="icon"><AiOutlineMail/></div>
         <div className="link-name">Email</div>
         <div className="link-detail">tempmail@gmil.com</div>
         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sv80629159@gmail.com" className="link-send">Send Message</a>
      </div>

      <div className="contact-link-box">
         <div className="icon"><RiMessengerLine/></div>
         <div className="link-name">Messenger</div>
         <div className="link-detail">Sunil Verma</div>
         <a href="">Send Message</a>
      </div>

      <div className="contact-link-box">
         <div className="icon"><RiWhatsappLine/></div>
         <div className="link-name">WhatsApp</div>
         <div className="link-detail">+1234567890</div>
         <a href="" className="link-send">Send Message</a>
      </div>

     </div>
     <div className="form">
     <form onSubmit={submitHandler}>
     <div class="input-wrapper">
  <input type="text" id="user" required name='name'/>
  <label for="user"> name</label>
</div>

<div class="input-wrapper">
  <input type="email" required name="email"/>
  <label for="user">email</label>
</div>


<div class="input-wrapper">
  <textarea type="text" required rows='10' name='message'/>
  <label for="user">message</label>
</div>
     <button type="submit">Submit form</button>
     </form>
     </div>
     </div>
    </div>
    
  )
}

export default Contact