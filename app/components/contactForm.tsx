"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-[60vh] bg-cover bg-center"
      style={{}}
    >
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

      {/* Form Container */}
      <div className="relative lg:p-10 max-w-lg w-full">
        {/* <h2 className="text-white text-2xl font-bold text-center mb-6">
          Have a Question?
        </h2> */}

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute top-0 left-0 bg-white/80 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
            <Image
              src="/photos/contact/icon-name.png"
              alt="User Icon"
              width={20}
              height={20}
              className="absolute left-2 top-3"
            />
            <input
              type="text"
              name="user_name"
              className="w-full p-3 pl-12 text-black placeholder-gray-300 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Namesss"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute top-0 left-0 bg-white/80 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
            <Image
              src="/photos/contact/icon-email.png"
              alt="Email Icon"
              width={20}
              height={20}
              className="absolute left-2 top-3"
            />
            <input
              type="email"
              name="user_email"
              className="w-full p-3 pl-12 bg-white/30 text-white placeholder-gray-300 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="relative">
            <div className="absolute top-0 left-0 bg-white/80 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
            <Image
              src="/photos/contact/icon-phone.png"
              alt="Phone Icon"
              width={20}
              height={20}
              className="absolute left-2 top-3"
            />
            <input
              type="tel"
              name="user_phone"
              className="w-full p-3 pl-12 bg-white/30 text-white placeholder-gray-300 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Phone"
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <div className="absolute top-0 left-0 bg-white/80 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
            <Image
              src="/photos/contact/icon-message.png"
              alt="Message Icon"
              width={20}
              height={20}
              className="absolute left-2 top-3"
            />
            <textarea
              name="message"
              className="w-full p-3 pl-12 bg-white/30 text-white placeholder-gray-300 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-white min-h-[120px] mb-[-6px]"
              placeholder="Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center !mb-[-60px]">
            <button
              type="submit"
              className="bg-accent text-white py-3 px-6 rounded-md shadow-md hover:bg-[var(--neutral-dark)] transition-all border border-white font-proxima-bold shadow-[inset_0px_2px_6px_rgba(0,0,0,0.5)]"
            >
              Send us a Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
