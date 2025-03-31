"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/forms.scss";

const ContactFormServiceFeedback: React.FC = () => {
  const router = useRouter();
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
      first_name: formData.get("fname") as string,
      last_name: formData.get("lname") as string,
      user_email: formData.get("email") as string,
      feedback_type: formData.get("feedback_type") as string,
      service_completed: formData.get("service_completed") as string,
      other_service: formData.get("other_service") as string,
      recommendation_likelihood: formData.get(
        "recommendation_likelihood"
      ) as string,
      core_values_representation: formData.get(
        "core_values_representation"
      ) as string,
      comments: formData.get("comments") as string,
      friendliness_satisfaction: formData.get(
        "friendliness_satisfaction"
      ) as string,
      knowledge_satisfaction: formData.get("knowledge_satisfaction") as string,
      reliability_satisfaction: formData.get(
        "reliability_satisfaction"
      ) as string,
      final_comments: formData.get("final_comments") as string,
      embed_url: window.location.href,
    };

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmailServiceFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Feedback submitted successfully!");
        formRef.current.reset();
        router.push("/thank-you/");
      } else {
        toast.error(result.error || "Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center bg-cover bg-center bg-gray-50">
      <div className="relative lg:py-10 max-w-2xl w-full">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          onChange={handleInputChange}
          className="space-y-6 bg-white/95 p-8 rounded-lg shadow-lg"
        >
          {/* Name Fields */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label
                htmlFor="fname"
                className="block text-gray-700 font-medium mb-2"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fname"
                type="text"
                name="fname"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lname"
                className="block text-gray-700 font-medium mb-2"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lname"
                type="text"
                name="lname"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Feedback Type */}
          <div>
            <label
              htmlFor="feedback_type"
              className="block text-gray-700 font-medium mb-2"
            >
              Feedback Type <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="feedback_type_suggestion"
                  name="feedback_type"
                  value="Suggestion"
                  required
                  className="w-4 h-4"
                />
                <span>Suggestion</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="feedback_type_compliment"
                  name="feedback_type"
                  value="Compliment"
                  required
                  className="w-4 h-4"
                />
                <span>Compliment</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="feedback_type_complaint"
                  name="feedback_type"
                  value="Complaint"
                  required
                  className="w-4 h-4"
                />
                <span>Complaint</span>
              </label>
            </div>
          </div>

          {/* Service Completed */}
          <div>
            <label
              htmlFor="service_completed"
              className="block text-gray-700 font-medium mb-2"
            >
              Service Completed <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="service_completed_commercial"
                  name="service_completed"
                  value="Commercial Painting"
                  required
                  className="w-4 h-4"
                />
                <span>Commercial Painting</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="service_completed_residential"
                  name="service_completed"
                  value="Residential Painting"
                  required
                  className="w-4 h-4"
                />
                <span>Residential Painting</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="service_completed_custom"
                  name="service_completed"
                  value="Custom Painting"
                  required
                  className="w-4 h-4"
                />
                <span>Custom Painting</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="service_completed_drywall"
                  name="service_completed"
                  value="Drywall"
                  required
                  className="w-4 h-4"
                />
                <span>Drywall</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="service_completed_pressure"
                  name="service_completed"
                  value="Pressure Washing"
                  required
                  className="w-4 h-4"
                />
                <span>Pressure Washing</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="service_completed_deck"
                  name="service_completed"
                  value="Deck Coating"
                  required
                  className="w-4 h-4"
                />
                <span>Deck Coating</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="service_completed_epoxy"
                  name="service_completed"
                  value="Epoxy Floors"
                  required
                  className="w-4 h-4"
                />
                <span>Epoxy Floors</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="service_completed_other"
                  name="service_completed"
                  value="Other"
                  required
                  className="w-4 h-4"
                />
                <span>Other</span>
              </label>
            </div>
          </div>

          {/* Other Service */}
          <div>
            <label
              htmlFor="other_service"
              className="block text-gray-700 font-medium mb-2"
            >
              If Other
            </label>
            <input
              id="other_service"
              type="text"
              name="other_service"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Please specify the service if you selected Other"
            />
          </div>

          {/* Recommendation Likelihood */}
          <div>
            <label className="block text-gray-700 font-medium mb-4">
              Likelihood to Recommend <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-600 mb-4">
              Likelihood that you would recommend our company to a close
              relative or friend in need of work related to the services we
              offer at Paint Innovators.
            </p>
            <div className="space-y-2">
              {[
                { value: "Strongly Agree", label: "Strongly Agree" },
                { value: "Agree", label: "Agree" },
                { value: "Neutral", label: "Neutral" },
                { value: "Disagree", label: "Disagree" },
                { value: "Strongly Disagree", label: "Strongly Disagree" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-3"
                >
                  <input
                    type="radio"
                    name="recommendation_likelihood"
                    value={option.value}
                    required
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div>
            <label className="block text-gray-700 font-medium mb-4">
              Core Values Representation <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-600 mb-4">
              Our management team is committed to our core values. We expect
              each team member to be committed as well. Each member persistently
              represented our core values throughout the entirety of the
              project. (Integrity, Safety, Collaboration, Creativity,
              Reliability, and Respect).
            </p>
            <div className="space-y-2">
              {[
                { value: "Strongly Agree", label: "Strongly Agree" },
                { value: "Agree", label: "Agree" },
                { value: "Neutral", label: "Neutral" },
                { value: "Disagree", label: "Disagree" },
                { value: "Strongly Disagree", label: "Strongly Disagree" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-3"
                >
                  <input
                    type="radio"
                    name="core_values_representation"
                    value={option.value}
                    required
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div>
            <label
              htmlFor="comments"
              className="block text-gray-700 font-medium mb-2"
            >
              Comments on Questions Above{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comments"
              name="comments"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            ></textarea>
          </div>

          {/* Satisfaction Ratings */}
          {[
            {
              id: "friendliness_satisfaction",
              label: "Overall satisfaction of friendliness",
              options: [
                "very satisfied",
                "satisfied",
                "neutral",
                "unsatisfied",
                "very unsatisfied",
              ],
            },
            {
              id: "knowledge_satisfaction",
              label: "Overall satisfaction of knowledge",
              options: [
                "very satisfied",
                "satisfied",
                "neutral",
                "unsatisfied",
                "very unsatisfied",
              ],
            },
            {
              id: "reliability_satisfaction",
              label: "Overall satisfaction with reliability",
              options: [
                "very satisfied",
                "satisfied",
                "neutral",
                "unsatisfied",
                "very unsatisfied",
              ],
            },
          ].map((field) => (
            <div key={field.id}>
              <label className="block text-gray-700 font-medium mb-2">
                {field.label} <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {field.options.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={`${field.id}_${option
                        .replace(/\s+/g, "_")
                        .toLowerCase()}`} // Create unique IDs
                      name={field.id}
                      value={option}
                      required
                      className="w-4 h-4"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* Final Comments */}
          <div>
            <label
              htmlFor="final_comments"
              className="block text-gray-700 font-medium mb-2"
            >
              Final Comments
            </label>
            <textarea
              id="final_comments"
              name="final_comments"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn-main square"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Service Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormServiceFeedback;
