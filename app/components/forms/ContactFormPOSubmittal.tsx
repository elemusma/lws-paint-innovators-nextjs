"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/forms.scss";
import { formatPhoneNumber } from "./phoneFormatting";

const ContactForm: React.FC = () => {
  const router = useRouter(); // Initialize Next.js router
  // const formRef = useRef<HTMLFormElement>(null);
  // const [loading, setLoading] = useState(false);

  const projectManagers = [
    "Allen",
    "Jeff",
    "Kenneth",
    "Keenan",
    "Rodney",
    "Toni",
    "Global Concrete",
    "Matt",
  ];

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue =
          "Are you sure you want to leave? Changes you made may not be saved.";
        return e.returnValue;
      }
    },
    [isDirty]
  ); // Add isDirty to dependency array if it's used inside
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, handleBeforeUnload]);

  const handleInputChange = () => {
    setIsDirty(true);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const data = {
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      job_name: formData.get("job_name") as string,
      job_address_line1: formData.get("job_address_line1") as string,
      job_address_line2: formData.get("job_address_line2") as string,
      job_address_city: formData.get("job_address_city") as string,
      job_address_state: formData.get("job_address_state") as string,
      job_address_zip: formData.get("job_address_zip") as string,
      general_contractor: formData.get("general_contractor") as string,
      user_email: formData.get("user_email") as string,
      user_phone: formData.get("user_phone") as string,
      project_manager: formData.get("project_manager") as string,
      start_date: formData.get("start_date") as string,
      quickbooks_time: formData.get("quickbooks_time") as string,
      bid_price: formData.get("bid_price") as string,
      embed_url: window.location.href, // Capture the current page URL
    };

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmailPOSubmittal", {
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
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 py-[50px]">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl w-full">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          onChange={handleInputChange}
          className="space-y-4"
        >
          <p className="text-xl font-bold mb-6 border-b pb-2">
            Project Estimator (required)
          </p>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Job Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Name <span className="text-red-500">*</span>
            </label>
            <textarea
              id="job_name"
              name="job_name"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address Fields */}
          <fieldset className="mb-6">
            <legend className="text-lg font-medium text-gray-700 mb-2">
              Job Address <span className="text-red-500">*</span>
            </legend>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Line 1 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="job_address_line1"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="job_address_line2"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="job_address_city"
                    name="job_address_city"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="job_address_state"
                    id="job_address_state"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="job_address_zip"
                    name="job_address_zip"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* General Contractor */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              General Contractor <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Enter the name of the general contractor. Use the name we will
              bill.
            </p>
            <textarea
              id="general_contractor"
              name="general_contractor"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="user_phone"
                id="user_phone"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                onChange={formatPhoneNumber}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Manager <span className="text-red-500">*</span>
              </label>
              <select
                id="project_manager"
                name="project_manager"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a Project Manager</option>
                {projectManagers.map((manager) => (
                  <option key={manager} value={manager}>
                    {manager}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estimated Start Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="start_date"
                  name="start_date"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {/* <Calendar className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" /> */}
              </div>
            </div>
          </div>

          {/* Quickbooks Time */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quickbooks Time <span className="text-red-500">*</span>
            </label>
            <select
              id="quickbooks_time"
              name="quickbooks_time"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="Yes Quicktime - Hourly employees">
                Yes Quicktime - Hourly employees
              </option>
              <option value="No Quicktime - Subcontractors">
                No Quicktime - Subcontractors
              </option>
            </select>
          </div>

          {/* Bid Price */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bid Price / Contract Price
            </label>
            <textarea
              id="bid_price"
              name="bid_price"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center" style={{}}>
            <button
              type="submit"
              className="btn-main square"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send PO Submittal"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
