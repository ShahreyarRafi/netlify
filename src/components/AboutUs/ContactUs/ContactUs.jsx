"use client";

import React, { useRef } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_uzkvpvg",
        "template_a5m3vbr",
        form.current,
        "I54EHbb6_LwYWwU4e"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: "Your message has been sent successfully!",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-base-100">
      <div className={" mt-8  max-w-7xl mx-auto text-gray-800"}>
        <h2 className="text-2xl font-semibold mb-4 pt-5 text-center">
          Contact Us
        </h2>

        <div className=" flex flex-col md:flex-row">
          <div className=" flex-1 md:my-20 mx-5 md:mx-8">
            <p className=" mb-4">{`Feel free to drop us a message, and we will get back to you as soon as possible!`}</p>

            <p className=" mb-4">{`Shoot us an email at boibinimoy.web@gmail.com and we'll be sure to respond.`}</p>
            <p className=" mb-4">
              Follow us on social media platforms to stay up-to-date on the latest
              news and events.
            </p>
            <span className=" flex justify-center gap-10">
              <FaFacebook className=" text-blue-500 w-12 h-12" />
              <FaGithub className=" w-12 h-12" />
              <FaLinkedin className="text-blue-500 w-12 h-12" />
              <FaTwitter className="text-blue-500 w-12 h-12" />
            </span>
          </div>

          <div className=" flex-1 ">
            <form
              ref={form}
              onSubmit={sendEmail}
              className={`max-w-md mx-auto mt-8 p-6 rounded-lg shadow-md `}
            >
              <div className="mb-3">
                <label className="block ">Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  required
                  className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-orange-500 bg-white"
                />
              </div>

              <div className="mb-3">
                <label className="block ">Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                  required
                  className={
                    "border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-orange-500 bg-white"
                  }
                />
              </div>
              <div className="mb-3">
                <label className="block ">Subject</label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  name="subject"
                  className={
                    "border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-orange-500 bg-white"
                  }
                />
              </div>

              <div className="mb-3">
                <label className="block ">Message</label>

                <textarea
                  placeholder="Type your message"
                  name="message"
                  required
                  className={
                    "border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-orange-500 bg-white"
                  }
                />
              </div>

              <span className=" flex justify-center">
                <input
                  type="submit"
                  className={
                    "px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 transition duration-300 text-white "
                  }
                  value="Send Message"
                />
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
