import { div } from "framer-motion/client";
import React from "react";

const Contacts = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4c249a78-0c5f-49cf-b977-9250a44a6137");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="">
      <div className="contact-title">
        <h1 className="">Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's create something amazing together</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-details">
              <img src="#" alt="" />
              <p>yadavd4631@gmail.com</p>
            </div>
            <div className="contact-details">
              <img src="#" alt="" />
              <p>+91 9320241574</p>
            </div>
            <div className="contact-details">
              <img src="#" alt="" />
              <p>Mumbai,Maharashtra</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="Contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Name</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className= "">Sumbit now</button>
        </form>
      </div>
    </div>
  );
};
export default Contacts;
