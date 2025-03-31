"use client";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
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

function CareerEnglish() {
  const pathname = usePathname();
  const language = pathname === "/careers/pintor-masero" ? "es" : "en";
  const translations = {
    en: {
      instructions:
        "Please fill out all required fields marked with an asterisk",
      disclaimer:
        "It is important that you DO NOT REFRESH the web page while completing this job application. Programs, services, and employment are equally available to everyone. Please inform the Human Resources Department if you require reasonable accommodation for the application or interview.",
      personal_information: "Personal Information",
      first_name: "First Name",
      last_name: "Last Name",
      phone: "Phone",
      alt_phone: "Alternative Phone",
      email: "Email",
      position: "Position Applied for",
      referral_source: "How did you hear about us?",
      address_title: "Address",
      address_line_1: "Address Line 1",
      address_line_2: "Address Line 2",
      city: "City",
      state: "State",
      zip: "ZIP Code",
      employment_title: "Employment Details",
      start_date: "Date Available to Start",
      compensation: "Compensation Requirements ($/Hour)",
      work_permit: "If you are under 18, can you provide a work permit?",
      work_permit_explanation: "If no, please explain:",
      previous_employment: "Have you ever worked for Paint Innovators, Inc.?",
      legal_work_status: "Are you legally authorized to work in the U.S.?",
      employment_type: "Type of Employment Desired",
      criminal_record:
        "Have you ever pleaded guilty, no contest, or been convicted of a crime?",
      prev1_employer: "Previous Employer #1",
      prev2_employer: "Previous Employer #2",
      company_name: "Company Name",
      starting_position: "Starting Position",
      ending_position: "Ending Position",
      years_worked: "Years Worked",
      reason_for_leaving: "Reasons for Leaving",
      contact_permission: "May we contact this employer?",
      responsibilities: "Responsibilities",
      skills_qualifications_title: "Skills and Certification",
      skills_qualifications: "Summarize your special skills or qualifications",
      certification_agreement_title: "Certification and Agreement",
      certification_agreement_text:
        "I certify that my answers are true and complete to the best of my knowledge. I authorize investigations of all statements contained in this application as may be necessary in arriving at an employment decision. I understand that false or misleading information in my application or interview may result in discharge.",
      agreement_text: "I Agree",
      submit: "Submit Application",
      yes: "Yes",
      no: "No",
      fulltime: "Full-Time",
      parttime: "Part-Time",
      temporary: "Temporary",
      seasonal: "Seasonal",
    },
    es: {
      instructions:
        "Por favor, complete todos los campos obligatorios marcados con un asterisco",
      disclaimer:
        "Es importante que NO ACTUALICE la página web mientras completa esta solicitud de empleo. Los programas, servicios y empleos están igualmente disponibles para todos. Informe al Departamento de Recursos Humanos si necesita un ajuste razonable para la solicitud o la entrevista.",
      personal_information: "Información Personal",
      first_name: "Nombre",
      last_name: "Apellido",
      phone: "Teléfono",
      alt_phone: "Teléfono Alternativo",
      email: "Correo Electrónico",
      position: "Posición Deseada",
      referral_source: "¿Cómo escucho de nosotros?",
      address_title: "Dirección",
      address_line_1: "Dirección Línea 1",
      address_line_2: "Dirección Línea 2",
      city: "Ciudad",
      state: "Estado",
      zip: "Código Postal",
      employment_title: "Detalles del Empleo",
      start_date: "Fecha Disponible para Comenzar",
      compensation: "Salario Deseado ($/Hora)",
      work_permit:
        "Si tiene menos de 18 años, ¿puede proporcionar un permiso de trabajo?",
      work_permit_explanation: "Si no, por favor explique el motivo:",
      previous_employment:
        "¿Ha trabajado alguna vez para Paint Innovators, Inc.?",
      legal_work_status:
        "¿Está autorizado legalmente para trabajar en los EE.UU.?",
      employment_type: "Tipo de Empleo Deseado",
      criminal_record:
        "¿Alguna vez se ha declarado culpable, no impugnó o ha sido condenado por un delito?",
      prev1_employer: "Empleador Anterior #1",
      prev2_employer: "Empleador Anterior #2",
      company_name: "Nombre de la Empresa",
      starting_position: "Puesto inicial en la empresa",
      ending_position: "Puesto final en la empresa",
      years_worked: "Años trabajados en esa empresa",
      reason_for_leaving: "Razon por la cual dejó ese empleo",
      contact_permission: "¿Podemos contactar a este empleador?",
      responsibilities: "Responsabilidades",
      skills_qualifications_title: "Habilidades y Certificaciones",
      skills_qualifications:
        "Describa sus habilidades o calificaciones especiales",
      certification_agreement_title: "Certificación y Acuerdo",
      certification_agreement_text:
        "Certifico que mis respuestas son verdaderas y completas según mi mejor conocimiento. Autorizo la investigación de todas las declaraciones contenidas en esta solicitud, según sea necesario para tomar una decisión de empleo. Entiendo que la información falsa o engañosa en mi solicitud o entrevista puede resultar en mi despido.",
      agreement_text: "Estoy de Acuerdo",
      submit: "Enviar Solicitud",
      yes: "Si",
      no: "No",
      fulltime: "Tiempo Completo",
      parttime: "Tiempo Parcial",
      temporary: "Temporal",
      seasonal: "Por Temporada",
    },
  };

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
      user_phone: formData.get("phone") as string,
      alt_phone: formData.get("alt_phone") as string,
      position: formData.get("position_desired") as string,
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
      work_for_paint_innovators: formData.get(
        "work_for_paint_innovators"
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
        company_name_prev2: formData.get("prev2_company_name") as string,
        address: {
          country: formData.get("prev2_country") as string,
          line1: formData.get("prev2_address_line1") as string,
          line2: formData.get("prev2_address_line2") as string,
          city: formData.get("prev2_city") as string,
          state: formData.get("prev2_state") as string,
          zip: formData.get("prev2_zip") as string,
        },
        start_title_prev2: formData.get("prev2_start_title") as string,
        end_title_prev2: formData.get("prev2_end_title") as string,
        responsibilities_prev2: formData.get(
          "prev2_responsibilities"
        ) as string,
        years_worked_prev2: formData.get("prev2_years_worked") as string,
        reason_leaving_prev2: formData.get("prev2_reason_leaving") as string,
        contact_permission_prev2: formData.get(
          "prev2_contact_permission"
        ) as string,
      },
      // reference: {
      //   first_name: formData.get("ref_fname") as string,
      //   last_name: formData.get("ref_lname") as string,
      //   phone: formData.get("ref_phone") as string,
      //   email: formData.get("ref_email") as string,
      //   relation: formData.get("ref_relation") as string,
      // },
      skills_qualifications: formData.get("skills_qualifications") as string,
      certification_agreement: formData.get(
        "certification_agreement"
      ) as string,
      embed_url: window.location.href,
      // position: document.title, // Page Title
      // position: document.querySelector("h1")?.innerText, // Page Title
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
          window.location.href = "/thank-you";
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
            {translations[language].instructions} (
            <span className="text-accent">*</span>)
          </p>
          <p>
            <em>
              <small>{translations[language].disclaimer}</small>
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
              {translations[language].personal_information}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].first_name}{" "}
                  <span className="text-red-500">*</span>
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
                  {translations[language].last_name}{" "}
                  <span className="text-red-500">*</span>
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
                  {translations[language].phone}{" "}
                  <span className="text-red-500">*</span>
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
                  {translations[language].alt_phone}
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
                {translations[language].email}{" "}
                <span className="text-red-500">*</span>
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
              {pathname === "/careers/painter-drywall-finisher" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Position Applied for <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="position_desired"
                        value="Painter"
                        required
                        className="w-4 h-4"
                      />
                      <span>Painter</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="position_desired"
                        value="Drywall Finisher"
                        required
                        className="w-4 h-4"
                      />
                      <span>Drywall Finisher</span>
                    </label>
                  </div>
                </div>
              )}
              {pathname === "/careers/pintor-masero" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Posición Deseada <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="position_desired"
                        value="Pintor"
                        required
                        className="w-4 h-4"
                      />
                      <span>El Pintor</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="position_desired"
                        value="Drywall Finisher"
                        required
                        className="w-4 h-4"
                      />
                      <span>Acabado Drywall</span>
                    </label>
                  </div>
                </div>
              )}
              {pathname === "/careers/project-estimator" && (
                <>
                  <input
                    type="text"
                    name="position_desired"
                    value="Project Estimator"
                    hidden
                  />
                </>
              )}
              {pathname === "/careers/project-manager" && (
                <input
                  type="text"
                  name="position_desired"
                  value="Project Manager"
                  hidden
                />
              )}
              {pathname === "/careers/office-associate" && (
                <input
                  type="text"
                  name="position_desired"
                  value="Office Associate"
                  hidden
                />
              )}
            </div>

            <div>
              <label
                htmlFor="referral_source"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].referral_source}
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
              {translations[language].address_title}
            </h3>

            <div>
              <label
                htmlFor="address_line1"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].address_line_1}{" "}
                <span className="text-red-500">*</span>
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
                {translations[language].address_line_2}
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
                  {translations[language].city}{" "}
                  <span className="text-red-500">*</span>
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
                  {translations[language].state}{" "}
                  <span className="text-red-500">*</span>
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
                  {translations[language].zip}{" "}
                  <span className="text-red-500">*</span>
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
              {translations[language].employment_title}
            </h3>

            <div>
              <label
                htmlFor="start_date"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].start_date}{" "}
                <span className="text-red-500">*</span>
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
                {translations[language].compensation}{" "}
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

            {/* Work Permit for Under 18 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {translations[language].work_permit}
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="work_permit"
                    value={`${translations[language].yes}`}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].yes}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="work_permit"
                    value={`${translations[language].no}`}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].no}</span>
                </label>
              </div>
            </div>

            {/* Explanation if No Work Permit */}
            <div>
              <label
                htmlFor="work_permit_explanation"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].work_permit_explanation}
              </label>
              <input
                id="work_permit_explanation"
                name="work_permit_explanation"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Previous Employment with Paint Innovators */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {translations[language].previous_employment}
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="work_for_paint_innovators"
                    value={`${translations[language].yes}`}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].yes}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="work_for_paint_innovators"
                    value={`${translations[language].no}`}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].no}</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="legal_work_status"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].legal_work_status}{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="legal_work_status"
                    value={`${translations[language].yes}`}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].yes}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="legal_work_status"
                    value={`${translations[language].no}`}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].no}</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="employment_type"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].employment_type}{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="employment_type"
                    value="Full-time"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].fulltime}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="employment_type"
                    value="Part-time"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].parttime}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="employment_type"
                    value="Temporary"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].temporary}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="employment_type"
                    value="Seasonal"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].seasonal}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Criminal Record */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {translations[language].criminal_record}
              <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="criminal_record"
                  value={`${translations[language].yes}`}
                  required
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span>{translations[language].yes}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="criminal_record"
                  value={`${translations[language].no}`}
                  required
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span>{translations[language].no}</span>
              </label>
            </div>
          </div>

          {/* Previous Employment */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              {translations[language].prev1_employer}
            </h3>

            {/* Previous Employer 1 */}
            <div className="space-y-6">
              {/* <h4 className="text-lg font-semibold text-gray-900">
                Most Recent Employer
              </h4> */}

              <div>
                <label
                  htmlFor="prev1_company_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].company_name}{" "}
                  <span className="text-red-500">*</span>
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
                  htmlFor="prev1_address_line1"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].address_line_1}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="prev1_address_line1"
                  name="prev1_address_line1"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="prev1_address_line2"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].address_line_2}
                </label>
                <input
                  id="prev1_address_line2"
                  name="prev1_address_line2"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="col-span-2">
                  <label
                    htmlFor="prev1_city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {translations[language].city}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev1_city"
                    name="prev1_city"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="prev1_state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {translations[language].state}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev1_state"
                    name="prev1_state"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="prev1_zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {translations[language].zip}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev1_zip"
                    name="prev1_zip"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="prev1_responsibilities"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].responsibilities}{" "}
                  <span className="text-red-500">*</span>
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
                    {translations[language].starting_position}{" "}
                    <span className="text-red-500">*</span>
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
                    {translations[language].ending_position}
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
                  {translations[language].years_worked}
                </label>
                <input
                  id="prev1_years_worked"
                  name="prev1_years_worked"
                  type="number"
                  step="0.1"
                  onWheel={(e) => (e.target as HTMLInputElement).blur()}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="prev1_reason_leaving"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].reason_for_leaving}
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
                  {translations[language].contact_permission}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="prev1_contact_permission"
                      value={`${translations[language].yes}`}
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span>{translations[language].yes}</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="prev1_contact_permission"
                      value={`${translations[language].no}`}
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span>{translations[language].no}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              {translations[language].prev2_employer}
            </h3>

            <div>
              <label
                htmlFor="prev2_company_name"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].company_name}{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="prev2_company_name"
                name="prev2_company_name"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="prev2_address_line1"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].address_line_1}{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="prev2_address_line1"
                name="prev2_address_line1"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="prev2_address_line2"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].address_line_2}
              </label>
              <input
                id="prev2_address_line2"
                name="prev2_address_line2"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="col-span-2">
                <label
                  htmlFor="prev2_city"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].city}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="prev2_city"
                  name="prev2_city"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="prev2_state"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].state}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="prev2_state"
                  name="prev2_state"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="prev2_zip"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].zip}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="prev2_zip"
                  name="prev2_zip"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="prev2_responsibilities"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].responsibilities}{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="prev2_responsibilities"
                name="prev2_responsibilities"
                required
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="prev2_start_title"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].starting_position}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="prev2_start_title"
                  name="prev2_start_title"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="prev2_end_title"
                  className="block text-sm font-medium text-gray-700"
                >
                  {translations[language].ending_position}
                </label>
                <input
                  id="prev2_end_title"
                  name="prev2_end_title"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="prev2_years_worked"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].years_worked}
              </label>
              <input
                id="prev2_years_worked"
                name="prev2_years_worked"
                type="number"
                step="0.1"
                onWheel={(e) => (e.target as HTMLInputElement).blur()}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="prev2_reason_leaving"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].reason_for_leaving}
              </label>
              <input
                id="prev2_reason_leaving"
                name="prev2_reason_leaving"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="prev2_contact_permission"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].contact_permission}{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="prev2_contact_permission"
                    value={`${translations[language].yes}`}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].yes}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="prev2_contact_permission"
                    value={`${translations[language].no}`}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].no}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Skills and Certification */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              {translations[language].skills_qualifications_title}
            </h3>

            <div>
              <label
                htmlFor="skills_qualifications"
                className="block text-sm font-medium text-gray-700"
              >
                {translations[language].skills_qualifications}{" "}
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
                {translations[language].certification_agreement_title}{" "}
                <span className="text-red-500">*</span>
              </label>

              <p className="mt-2 text-sm text-gray-500">
                {translations[language].certification_agreement_text}
              </p>
              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="certification_agreement"
                    value={`${translations[language].agreement_text}`}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>{translations[language].agreement_text}</span>
                </label>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center">
            <button
              type="submit"
              disabled={loading}
              className="btn-main square"
            >
              {loading
                ? language === "en"
                  ? "Submitting..."
                  : "Enviando..."
                : translations[language].submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CareerEnglish;
