"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/forms.scss";
import { formatPhoneNumber } from "./phoneFormatting";

const ContactForm: React.FC = () => {
  const router = useRouter(); // Initialize Next.js router
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const data = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      user_phone: formData.get("user_phone") as string,
      user_subject: formData.get("user_subject") as string,
      message: formData.get("message") as string,
      embed_url: window.location.href, // Capture the current page URL
    };

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmailForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        toast.success("Message sent successfully!");
        formRef.current.reset();
        // Redirect to thank-you page after success
        router.push("/thank-you/");
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-[60vh] bg-cover bg-center">
      <div className="relative lg:p-10 max-w-lg w-full">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-white"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-0 left-0 bg-white/80 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
              <Image
                src="/forms/Form-Name.png"
                alt="User Icon"
                width={20}
                height={20}
                className="absolute left-2 top-3"
              />
              <input
                type="text"
                name="user_name"
                className="w-full p-3 pl-12 bg-white/30 text-white placeholder-gray-300 rounded-md"
                placeholder="Name"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-white"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-0 left-0 bg-white/80 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
              <Image
                src="/forms/Form-Email.png"
                alt="Email Icon"
                width={20}
                height={20}
                className="absolute left-2 top-3"
              />
              <input
                type="email"
                name="user_email"
                className="w-full p-3 pl-12 bg-white/30 text-white placeholder-gray-300 rounded-md"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="relative">
            <label
              htmlFor="user_phone"
              className="block text-sm font-medium text-white"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-0 left-0 bg-white/80 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
              <Image
                src="/forms/Form-Phone.png"
                alt="Phone Icon"
                width={20}
                height={20}
                className="absolute left-2 top-3"
              />
              <input
                type="tel"
                name="user_phone"
                className="w-full p-3 pl-12 bg-white/30 text-white placeholder-gray-300 rounded-md"
                placeholder="Phone"
                required
                maxLength={14} // Prevents extra characters after formatting
                onChange={formatPhoneNumber}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label
              htmlFor="user_subject"
              className="block text-sm font-medium text-white"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-0 left-0 bg-white/80 w-[35px] h-full rounded-tl-md rounded-bl-md"></div>
              <Image
                src="/forms/Form-Subject-Line.png"
                alt="Subject Line"
                width={20}
                height={20}
                className="absolute left-2 top-3"
              />
              <input
                type="text"
                name="user_subject"
                className="w-full p-3 pl-12 bg-white/30 text-white placeholder-gray-300 rounded-md"
                placeholder="Subject"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-0 left-0 bg-white/80 w-[35px] h-[95%] rounded-tl-md rounded-bl-md"></div>
              <Image
                src="/forms/Form-Message.png"
                alt="Message Icon"
                width={20}
                height={20}
                className="absolute left-2 top-3"
              />
              <textarea
                name="message"
                className="w-full p-3 pl-12 bg-white/30 text-white placeholder-gray-300 rounded-md min-h-[120px]"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center" style={{ marginBottom: "-55px" }}>
            <button
              type="submit"
              className="btn-main square"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send us a Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
