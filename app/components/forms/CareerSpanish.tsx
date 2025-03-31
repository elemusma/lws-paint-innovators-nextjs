"use client";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "../../styles/forms.scss";
import { formatPhoneNumber } from "./phoneFormatting";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Datos recibidos:", JSON.stringify(body, null, 2)); // ADD THIS LINE

    if (!body.first_name || !body.last_name || !body.user_email) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400 }
      );
    }

    // Continue with email sending...
  } catch (error) {
    console.error("Error en la API:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      {
        status: 500,
      }
    );
  }
}

function CareerSpanish() {
  const pathname = usePathname();

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue =
          "¿Está seguro de que desea salir? Los cambios que ha realizado podrían no guardarse.";
        return e.returnValue;
      }
    },
    [isDirty]
  ); // Add isDirty to dependency array if it's used inside
  // const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  //   if (isDirty) {
  //     e.preventDefault();
  //     e.returnValue =
  //       "¿Está seguro de que desea salir? Los cambios que ha realizado podrían no guardarse.";
  //     return e.returnValue;
  //   }
  // };
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
      // position: document.querySelector("h1")?.innerText, // Page Title
    };
    console.log("Enviando datos:", JSON.stringify(data, null, 2));
    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("¡Solicitud enviada con éxito!");
        formRef.current.reset();
        // ✅ Disable the warning BEFORE redirecting
        setIsDirty(false);
        window.removeEventListener("beforeunload", handleBeforeUnload);

        // ✅ Wait briefly before redirecting
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 200); // Small delay to ensure state is updated
      } else {
        toast.error(result.error || "Error al enviar la solicitud.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Algo salió mal. Por favor, intente de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 py-[50px]">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600 mb-2">
            Por favor, complete todos los campos obligatorios marcados con un
            asterisco (<span className="text-accent">*</span>)
          </p>
          <p>
            <em>
              <small>
                Es importante que NO ACTUALICE la página web mientras completa
                esta solicitud de empleo. Los programas, servicios y el empleo
                están disponibles para todos por igual. Por favor, informe al
                Departamento de Recursos Humanos si necesita alguna adaptación
                razonable para la solicitud o la entrevista.
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
              Información Personal
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre <span className="text-red-500">*</span>
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
                  Apellido <span className="text-red-500">*</span>
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
                  Teléfono <span className="text-red-500">*</span>
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
                  Teléfono Alternativo
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
                Correo Electrónico <span className="text-red-500">*</span>
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
              {pathname === "/careers/pintor-masero" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Puesto al que Aplica <span className="text-red-500">*</span>
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
                      <span>Pintor</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="position_desired"
                        value="Drywall Finisher"
                        required
                        className="w-4 h-4"
                      />
                      <span>Acabador de paneles de yeso</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="referral_source"
                className="block text-sm font-medium text-gray-700"
              >
                ¿Cómo se enteró de nosotros?
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
              Dirección
            </h3>

            <div>
              <label
                htmlFor="address_line1"
                className="block text-sm font-medium text-gray-700"
              >
                Dirección Línea 1 <span className="text-red-500">*</span>
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
                Dirección Línea 2
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
                  Ciudad <span className="text-red-500">*</span>
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
                  Estado <span className="text-red-500">*</span>
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
                  Código Postal <span className="text-red-500">*</span>
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
              Detalles de Empleo
            </h3>

            <div>
              <label
                htmlFor="start_date"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha de Disponibilidad para Comenzar{" "}
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
                Compensación Deseada ($/Hora){" "}
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
                Tipo de Empleo Deseado <span className="text-red-500">*</span>
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
                  <span>Tiempo Completo</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="employment_type"
                    value="Part-time"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>Tiempo Parcial</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="employment_type"
                    value="Temporary"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>Temporal</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="legal_work_status"
                className="block text-sm font-medium text-gray-700"
              >
                ¿Está legalmente autorizado para trabajar en los Estados Unidos?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="legal_work_status"
                    value="Yes"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>Sí</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="legal_work_status"
                    value="No"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>

          {/* Previous Employment */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              Empleo Anterior
            </h3>

            {/* Previous Employer 1 */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Empleador Más Reciente
              </h4>

              <div>
                <label
                  htmlFor="prev1_company_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre de la Empresa <span className="text-red-500">*</span>
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
                  Responsabilidades <span className="text-red-500">*</span>
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
                    Puesto Inicial <span className="text-red-500">*</span>
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
                    Puesto Final
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
                  Años Trabajados
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
                  Razón de Salida
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
                  ¿Podemos contactar a este empleador?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="prev1_contact_permission"
                      value="Yes"
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span>Sí</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="prev1_contact_permission"
                      value="No"
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              Referencia Profesional
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="ref_fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
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
                  Apellido
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
                Número de Teléfono
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
                Correo Electrónico
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
                Relación con la Referencia
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
              Habilidades y Certificaciones
            </h3>

            <div>
              <label
                htmlFor="skills_qualifications"
                className="block text-sm font-medium text-gray-700"
              >
                Resuma sus habilidades o cualificaciones especiales{" "}
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
                Certificación y Acuerdo <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="certification_agreement"
                    value="I Agree"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>Estoy de Acuerdo</span>
                </label>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Certifico que mis respuestas son verdaderas y completas a mi
                leal saber y entender. Autorizo la investigación de todas las
                declaraciones contenidas en esta solicitud que puedan ser
                necesarias para tomar una decisión de empleo. Entiendo que la
                información falsa o engañosa en mi solicitud o entrevista puede
                resultar en el despido.
              </p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <button
              type="submit"
              disabled={loading}
              className="btn-main square"
            >
              {loading ? "Enviando..." : "Enviar Solicitud"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CareerSpanish;
