"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "../../styles/forms.scss";

function ContactFormPermission() {
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
  );

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
      first_name: formData.get("fname") as string,
      last_name: formData.get("lname") as string,
      user_email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      featured_product: formData.get("featured_product") as string,
      detailed_summary: formData.get("detailed_summary") as string,
      campaign_start_date: formData.get("campaign_start_date") as string,
      campaign_end_date: formData.get("campaign_end_date") as string,
      audience_reach: formData.get("audience_reach") as string,
      media_value: formData.get("media_value") as string,
      target_locations: formData.getAll("target_locations") as string[],
      country: formData.get("country") as string,
      has_contact: formData.get("has_contact") as string,
      contact_first_name: formData.get("contact_fname") as string,
      contact_last_name: formData.get("contact_lname") as string,
      contact_email: formData.get("contact_email") as string,
      selected_assets: formData.getAll("selected_assets") as string[],
      file_link: formData.get("file_link") as string,
      agreement: formData.get("agreement") as string,
      embed_url: window.location.href, // Capture the current page URL
    };

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmailPermission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Form submitted successfully!");
        formRef.current.reset();
        setIsDirty(false);
        window.removeEventListener("beforeunload", handleBeforeUnload);
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 200);
      } else {
        toast.error(result.error || "Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 py-[50px]">
      <div className="max-w-4xl w-full space-y-8">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          onChange={handleInputChange}
          className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg"
          autoComplete="on"
        >
          {/* Request Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              Request Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="lname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lname"
                  name="lname"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="featured_product"
                className="block text-sm font-medium text-gray-700"
              >
                Featured Product/Client <span className="text-red-500">*</span>
              </label>
              <input
                id="featured_product"
                name="featured_product"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="detailed_summary"
                className="block text-sm font-medium text-gray-700"
              >
                Detailed Summary <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                Detailed summary of request, commercial, film, or program
              </p>
              <textarea
                id="detailed_summary"
                name="detailed_summary"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="campaign_start_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Campaign Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="campaign_start_date"
                  name="campaign_start_date"
                  type="date"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="campaign_end_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Campaign End Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="campaign_end_date"
                  name="campaign_end_date"
                  type="date"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="audience_reach"
                className="block text-sm font-medium text-gray-700"
              >
                Audience Reach <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">Select the Range</p>
              <div className="flex flex-wrap gap-4">
                {[
                  "0 to 10,000",
                  "10,001 to 20,000",
                  "20,001 to 40,000",
                  "40,001 to 60,000",
                  "60,001 to 100,000",
                  "500,000+",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="audience_reach"
                      value={option}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      style={{ accentColor: "var(--accent-primary)" }}
                      required
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="media_value"
                className="block text-sm font-medium text-gray-700"
              >
                Estimated Media Value <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">Select the Range</p>
              <div className="flex flex-wrap gap-4">
                {[
                  "$0 to $25,000",
                  "$25,0001 to $100,000",
                  "$100,001 to $500,000",
                  "$500,000+",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="media_value"
                      value={option}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Target Locations <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="target_locations"
                    value="This is a global campaign"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span>This is a global campaign</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="target_locations"
                    value="This campaign is for specific countries"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span>This campaign is for specific countries</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Country <span className="text-red-500">*</span>
              </label>
              <input
                id="country"
                name="country"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Details <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                Do you have a Paint Innovators contact for this request?
              </p>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="has_contact"
                    value="Yes"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="has_contact"
                    value="No"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact_fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Person&apos;s First Name{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact_fname"
                  name="contact_fname"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact_lname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Person&apos;s Last Name{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact_lname"
                  name="contact_lname"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact_email"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Person&apos;s Email{" "}
                <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                Enter the contact email you have for your contact person.
              </p>
              <input
                id="contact_email"
                name="contact_email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Selected Assets <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                Select the asset(s) that you have used within your campaign.
              </p>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="selected_assets"
                    value="Color Logo"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span>Color Logo</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="selected_assets"
                    value="Black Wordmark"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span>Black Wordmark</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="selected_assets"
                    value="White Wordmark"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span>White Wordmark</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="selected_assets"
                    value="Red Watermark"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span>Red Watermark</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="file_link"
                className="block text-sm font-medium text-gray-700"
              >
                File Link <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                Provide the file(s) that are part of your request. Only one can
                be entered in this field
              </p>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  https://
                </span>
                <input
                  id="file_link"
                  name="file_link"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-16"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmation <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                By submitting, you agree to abide by the Brand Usage Guidelines
                as well as Paint Innovators terms & policies.
              </p>
              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agreement"
                    value="I agree"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span>I agree</span>
                </label>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center">
            <button type="submit" disabled={loading} className="btn-main">
              {loading ? "Submitting..." : "Send Request for Brand Usage"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactFormPermission;
