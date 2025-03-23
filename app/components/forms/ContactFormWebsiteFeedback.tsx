"use client";

// import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../../styles/forms.scss";

const ContactFormRequestQuote: React.FC = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const data = {
      first_name: formData.get("fname") as string,
      last_name: formData.get("lname") as string,
      user_email: formData.get("email") as string,
      user_phone: formData.get("phone") as string,
      project_type: formData.get("project_type") as string,
      location: formData.get("location") as string,
      message: formData.get("message") as string,
      embed_url: window.location.href,
    };

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmailWebsiteFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Quote request sent successfully!");
        formRef.current.reset();
        router.push("/thank-you/");
      } else {
        toast.error(result.error || "Failed to send quote request.");
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
      <div className="relative lg:py-10 max-w-lg w-full">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-wrap justify-around">
            <div className="w-1/2 pr-2">
              <label htmlFor="fname" className="block text-white">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fname"
                type="text"
                name="fname"
                placeholder="First Name"
                required
                className="w-full p-3 rounded-md"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="lname" className="block text-white">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lname"
                type="text"
                name="lname"
                placeholder="Last Name"
                required
                className="w-full p-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-around">
            <div className="w-full pr-2">
              <label htmlFor="email" className="block text-white">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-3 rounded-md"
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="user_subject"
              className="block text-sm font-medium text-white"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="user_subject"
                className="w-full p-3 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                placeholder="Subject"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="user_subject"
              className="block text-sm font-medium text-white"
            >
              Page or URL <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="user_subject"
                className="w-full p-3 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                placeholder="https://"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-white">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="w-full p-3 rounded-md min-h-[120px] mt-0"
            ></textarea>
          </div>
          <div className="text-center" style={{ marginBottom: "-55px" }}>
            <button
              type="submit"
              className="btn-main square"
              disabled={loading}
            >
              {loading ? "Sending..." : "Request a Quote"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormRequestQuote;
