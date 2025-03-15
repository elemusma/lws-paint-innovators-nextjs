import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "../../styles/forms.scss";
import { formatPhoneNumber } from "./phoneFormatting";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received data:", JSON.stringify(body, null, 2)); // ADD THIS LINE

    if (!body.first_name || !body.last_name || !body.user_email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Continue with email sending...
  } catch (error) {
    console.error("Error in API:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

function CareerOfficeAssociate() {
  const pathname = usePathname();

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (isDirty) {
      e.preventDefault();
      e.returnValue =
        "Are you sure you want to leave? Changes you made may not be saved.";
      return e.returnValue;
    }
  };
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

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
      user_phone: formData.get("phone") as string,
      alt_phone: formData.get("alt_phone") as string,
      referral_source: formData.get("referral_source") as string,
      address: {
        country: formData.get("country") as string,
        line1: formData.get("address_line1") as string,
        line2: formData.get("address_line2") as string,
        city: formData.get("city") as string,
        state: formData.get("state") as string,
        zip: formData.get("zip") as string,
      },
      start_date: formData.get("start_date") as string,
      compensation: formData.get("compensation") as string,
      work_permit: formData.get("work_permit") as string,
      work_permit_explanation: formData.get(
        "work_permit_explanation"
      ) as string,
      previous_employment: formData.get("previous_employment") as string,
      previous_employment_date: formData.get(
        "previous_employment_date"
      ) as string,
      legal_work_status: formData.get("legal_work_status") as string,
      employment_type: formData.get("employment_type") as string,
      criminal_record: formData.get("criminal_record") as string,
      previous_employer_1: {
        company_name: formData.get("prev1_company_name") as string,
        address: {
          country: formData.get("prev1_country") as string,
          line1: formData.get("prev1_address_line1") as string,
          line2: formData.get("prev1_address_line2") as string,
          city: formData.get("prev1_city") as string,
          state: formData.get("prev1_state") as string,
          zip: formData.get("prev1_zip") as string,
        },
        start_title: formData.get("prev1_start_title") as string,
        responsibilities: formData.get("prev1_responsibilities") as string,
        years_worked: formData.get("prev1_years_worked") as string,
        end_title: formData.get("prev1_end_title") as string,
        reason_leaving: formData.get("prev1_reason_leaving") as string,
        contact_permission: formData.get("prev1_contact_permission") as string,
      },
      previous_employer_2: {
        company_name: formData.get("prev2_company_name") as string,
        address: {
          country: formData.get("prev2_country") as string,
          line1: formData.get("prev2_address_line1") as string,
          line2: formData.get("prev2_address_line2") as string,
          city: formData.get("prev2_city") as string,
          state: formData.get("prev2_state") as string,
          zip: formData.get("prev2_zip") as string,
        },
        start_title: formData.get("prev2_start_title") as string,
        responsibilities: formData.get("prev2_responsibilities") as string,
        years_worked: formData.get("prev2_years_worked") as string,
        end_title: formData.get("prev2_end_title") as string,
        reason_leaving: formData.get("prev2_reason_leaving") as string,
        contact_permission: formData.get("prev2_contact_permission") as string,
      },
      reference: {
        first_name: formData.get("ref_fname") as string,
        last_name: formData.get("ref_lname") as string,
        phone: formData.get("ref_phone") as string,
        email: formData.get("ref_email") as string,
        relation: formData.get("ref_relation") as string,
      },
      skills_qualifications: formData.get("skills_qualifications") as string,
      certification_agreement: formData.get(
        "certification_agreement"
      ) as string,
      embed_url: window.location.href,
      // position: document.title, // Page Title
      position: document.querySelector("h1")?.innerText, // Page Title
    };
    console.log("Sending data:", JSON.stringify(data, null, 2));
    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Application submitted successfully!");
        formRef.current.reset();
        // ✅ Disable the warning BEFORE redirecting
        setIsDirty(false);
        window.removeEventListener("beforeunload", handleBeforeUnload);

        // ✅ Wait briefly before redirecting
        setTimeout(() => {
          window.location.href = "/completed-job-application";
        }, 200); // Small delay to ensure state is updated
      } else {
        toast.error(result.error || "Error submitting application.");
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
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600 mb-2">
            Please fill out all required fields marked with an asterisk (
            <span className="text-accent">*</span>)
          </p>
          <p>
            <em>
              <small>
                It is important that you DO NOT REFRESH the web page while
                completing this job application. Programs, services, and
                employment are equally available to everyone. Please inform the
                Human Resources Department if you require reasonable
                accommodation for the application or interview.
              </small>
            </em>
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          onChange={handleInputChange}
          className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg"
          autoComplete="on"
        >
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              Personal Information
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  onChange={formatPhoneNumber}
                />
              </div>

              <div>
                <label
                  htmlFor="alt_phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Alternative Phone
                </label>
                <input
                  id="alt_phone"
                  name="alt_phone"
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  onChange={formatPhoneNumber}
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
            {/* <div>
              {pathname === "/careers/painter" && (
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Position Applied for <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full p-3 rounded-md"
                  >
                    <option value="">Select an option</option>
                    <option value="Painter">Painter</option>
                    <option value="Drywall Finisher">Drywall Finisher</option>
                  </select>
                </div>
              )}
            </div> */}

            <div>
              <label
                htmlFor="referral_source"
                className="block text-sm font-medium text-gray-700"
              >
                How did you hear about us?
              </label>
              <input
                id="referral_source"
                name="referral_source"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              Address
            </h3>

            <div>
              <label
                htmlFor="address_line1"
                className="block text-sm font-medium text-gray-700"
              >
                Address Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                id="address_line1"
                name="address_line1"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="address_line2"
                className="block text-sm font-medium text-gray-700"
              >
                Address Line 2
              </label>
              <input
                id="address_line2"
                name="address_line2"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP Code <span className="text-red-500">*</span>
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Employment Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              Employment Details
            </h3>

            <div>
              <label
                htmlFor="start_date"
                className="block text-sm font-medium text-gray-700"
              >
                Date Available to Start <span className="text-red-500">*</span>
              </label>
              <input
                id="start_date"
                name="start_date"
                type="date"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="compensation"
                className="block text-sm font-medium text-gray-700"
              >
                Desired Compensation ($/Hour){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="compensation"
                name="compensation"
                type="text"
                required
                placeholder="$"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="employment_type"
                className="block text-sm font-medium text-gray-700"
              >
                Type of Employment Desired{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="employment_type"
                name="employment_type"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="legal_work_status"
                className="block text-sm font-medium text-gray-700"
              >
                Are you legally authorized to work in the United States?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="legal_work_status"
                name="legal_work_status"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Previous Employment */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              Previous Employment
            </h3>

            {/* Previous Employer 1 */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Most Recent Employer
              </h4>

              <div>
                <label
                  htmlFor="prev1_company_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="prev1_company_name"
                  name="prev1_company_name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="prev1_responsibilities"
                  className="block text-sm font-medium text-gray-700"
                >
                  Responsibilities <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="prev1_responsibilities"
                  name="prev1_responsibilities"
                  required
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="prev1_start_title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Starting Position <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev1_start_title"
                    name="prev1_start_title"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="prev1_end_title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ending Position
                  </label>
                  <input
                    id="prev1_end_title"
                    name="prev1_end_title"
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="prev1_years_worked"
                  className="block text-sm font-medium text-gray-700"
                >
                  Years Worked
                </label>
                <input
                  id="prev1_years_worked"
                  name="prev1_years_worked"
                  type="number"
                  step="0.1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="prev1_reason_leaving"
                  className="block text-sm font-medium text-gray-700"
                >
                  Reason for Leaving
                </label>
                <input
                  id="prev1_reason_leaving"
                  name="prev1_reason_leaving"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="prev1_contact_permission"
                  className="block text-sm font-medium text-gray-700"
                >
                  May we contact this employer?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="prev1_contact_permission"
                  name="prev1_contact_permission"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              Professional Reference
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="ref_fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="ref_fname"
                  name="ref_fname"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="ref_lname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="ref_lname"
                  name="ref_lname"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="ref_phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="ref_phone"
                name="ref_phone"
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={formatPhoneNumber}
              />
            </div>

            <div>
              <label
                htmlFor="ref_email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="ref_email"
                name="ref_email"
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="ref_relation"
                className="block text-sm font-medium text-gray-700"
              >
                Relationship to Reference
              </label>
              <input
                id="ref_relation"
                name="ref_relation"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Skills and Certification */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              Skills and Certification
            </h3>

            <div>
              <label
                htmlFor="skills_qualifications"
                className="block text-sm font-medium text-gray-700"
              >
                Summarize your special skills or qualifications{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="skills_qualifications"
                name="skills_qualifications"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="certification_agreement"
                className="block text-sm font-medium text-gray-700"
              >
                Certification and Agreement{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="certification_agreement"
                name="certification_agreement"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                <option value="I Agree">I Agree</option>
              </select>
              <p className="mt-2 text-sm text-gray-500">
                I certify that my answers are true and complete to the best of
                my knowledge. I authorize investigations of all statements
                contained in this application as may be necessary in arriving at
                an employment decision. I understand that false or misleading
                information in my application or interview may result in
                discharge.
              </p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <button
              type="submit"
              disabled={loading}
              className="btn-main square"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CareerOfficeAssociate;
