import React from 'react';
import emailjs from 'emailjs-com';
import '../mail/email.css'

export default function Email() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_enyal5p', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <h2>Send Email to Us</h2>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <br/><br/>
      {/* <input type="submit" className="sendbtn" value="Send" /> */}
      <button class="button" type="submit">
       <span>Send</span>
      </button>

    </form>
  );
}
