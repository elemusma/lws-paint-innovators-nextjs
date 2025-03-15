import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "../../styles/forms.scss";
import { formatPhoneNumber } from "./phoneFormatting";

function CareerPintorMasero() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue =
          "¿Estás seguro de que quieres abandonar el formulario? Los cambios no guardados se perderán.";
        return e.returnValue;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
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
      position: formData.get("position") as string,
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
      skills_qualifications: formData.get("skills_qualifications") as string,
      certification_agreement: formData.get(
        "certification_agreement"
      ) as string,
      embed_url: window.location.href,
    };

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
        setIsDirty(false);
        window.location.href = "/completed-job-application-spanish";
      } else {
        toast.error(result.error || "Error al enviar la solicitud.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Algo salió mal. Inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-[60vh] bg-cover bg-center">
      <div className="relative lg:py-10 max-w-4xl w-full mx-4">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          onChange={handleInputChange}
          className="space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl"
          autoComplete="on"
          noValidate
        >
          {/* Personal Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Información Personal</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fname" className="block">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  id="fname"
                  type="text"
                  name="fname"
                  required
                  className="w-full p-3 rounded-md"
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label htmlFor="lname" className="block">
                  Apellido <span className="text-red-500">*</span>
                </label>
                <input
                  id="lname"
                  type="text"
                  name="lname"
                  required
                  className="w-full p-3 rounded-md"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  className="w-full p-3 rounded-md"
                  autoComplete="tel"
                  onChange={formatPhoneNumber}
                />
              </div>
              <div>
                <label htmlFor="alt_phone" className="block">
                  Teléfono Alternativo
                </label>
                <input
                  id="alt_phone"
                  type="tel"
                  name="alt_phone"
                  className="w-full p-3 rounded-md"
                  autoComplete="tel"
                  onChange={formatPhoneNumber}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block">
                Correo Electrónico <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-md"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Position Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">
              Información de la Posición
            </h2>

            <div>
              <label htmlFor="position" className="block">
                Posición Solicitada <span className="text-red-500">*</span>
              </label>
              <select
                id="position"
                name="position"
                required
                className="w-full p-3 rounded-md"
              >
                <option value="">Seleccione una opción</option>
                <option value="Painter">Pintor</option>
                <option value="Drywall Finisher">Acabado de Drywall</option>
              </select>
            </div>

            <div>
              <label htmlFor="referral_source" className="block">
                ¿Cómo se enteró de nosotros?
              </label>
              <input
                id="referral_source"
                type="text"
                name="referral_source"
                className="w-full p-3 rounded-md"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Dirección</h2>

            <div>
              <label htmlFor="country" className="block">
                País <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                required
                className="w-full p-3 rounded-md"
                autoComplete="country"
              >
                <option value="US">Estados Unidos</option>
              </select>
            </div>

            <div>
              <label htmlFor="address_line1" className="block">
                Dirección Línea 1 <span className="text-red-500">*</span>
              </label>
              <input
                id="address_line1"
                type="text"
                name="address_line1"
                required
                className="w-full p-3 rounded-md"
                autoComplete="address-line1"
              />
            </div>

            <div>
              <label htmlFor="address_line2" className="block">
                Dirección Línea 2
              </label>
              <input
                id="address_line2"
                type="text"
                name="address_line2"
                className="w-full p-3 rounded-md"
                autoComplete="address-line2"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block">
                  Ciudad <span className="text-red-500">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  required
                  className="w-full p-3 rounded-md"
                  autoComplete="address-level2"
                />
              </div>
              <div>
                <label htmlFor="state" className="block">
                  Estado <span className="text-red-500">*</span>
                </label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  required
                  className="w-full p-3 rounded-md"
                  autoComplete="address-level1"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block">
                  Código Postal <span className="text-red-500">*</span>
                </label>
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  required
                  className="w-full p-3 rounded-md"
                  autoComplete="postal-code"
                />
              </div>
            </div>
          </div>

          {/* Employment Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Detalles de Empleo</h2>

            <div>
              <label htmlFor="start_date" className="block">
                Fecha Disponible para Comenzar{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="start_date"
                type="date"
                name="start_date"
                required
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="compensation" className="block">
                Requisitos de Compensación ($/Hora){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="compensation"
                type="text"
                name="compensation"
                required
                className="w-full p-3 rounded-md"
                placeholder="$"
              />
            </div>

            <div>
              <label htmlFor="work_permit" className="block">
                Si es menor de 18 años, ¿puede proporcionar un permiso de
                trabajo?
              </label>
              <select
                id="work_permit"
                name="work_permit"
                className="w-full p-3 rounded-md"
              >
                <option value="">Seleccione una opción</option>
                <option value="Yes">Sí</option>
                <option value="No">No</option>
                <option value="Not Applicable">No Aplica</option>
              </select>
            </div>

            <div>
              <label htmlFor="work_permit_explanation" className="block">
                Si respondió no, por favor explique
              </label>
              <input
                id="work_permit_explanation"
                type="text"
                name="work_permit_explanation"
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="previous_employment" className="block">
                ¿Ha trabajado anteriormente para Paint Innovators?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="previous_employment"
                name="previous_employment"
                required
                className="w-full p-3 rounded-md"
              >
                <option value="">Seleccione una opción</option>
                <option value="Yes">Sí</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label htmlFor="previous_employment_date" className="block">
                Si respondió sí, ¿cuándo?
              </label>
              <input
                id="previous_employment_date"
                type="date"
                name="previous_employment_date"
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="legal_work_status" className="block">
                ¿Está legalmente autorizado para trabajar en los Estados Unidos?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="legal_work_status"
                name="legal_work_status"
                required
                className="w-full p-3 rounded-md"
              >
                <option value="">Seleccione una opción</option>
                <option value="Yes">Sí</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label htmlFor="employment_type" className="block">
                Tipo de empleo deseado <span className="text-red-500">*</span>
              </label>
              <select
                id="employment_type"
                name="employment_type"
                required
                className="w-full p-3 rounded-md"
              >
                <option value="">Seleccione una opción</option>
                <option value="Full-time">Tiempo Completo</option>
                <option value="Part-time">Medio Tiempo</option>
                <option value="Temporary">Temporal</option>
              </select>
            </div>

            <div>
              <label htmlFor="criminal_record" className="block">
                ¿Alguna vez se ha declarado culpable o ha sido condenado por un
                delito? <span className="text-red-500">*</span>
              </label>
              <select
                id="criminal_record"
                name="criminal_record"
                required
                className="w-full p-3 rounded-md"
              >
                <option value="">Seleccione una opción</option>
                <option value="Yes">Sí</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Previous Employment 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">
              Empleo Anterior (Más Reciente)
            </h2>

            <div>
              <label htmlFor="prev1_company_name" className="block">
                Nombre de la Empresa <span className="text-red-500">*</span>
              </label>
              <input
                id="prev1_company_name"
                type="text"
                name="prev1_company_name"
                required
                className="w-full p-3 rounded-md"
              />
            </div>

            {/* Previous Employer 1 Address */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Dirección de la Empresa</h3>

              <div>
                <label htmlFor="prev1_country" className="block">
                  País <span className="text-red-500">*</span>
                </label>
                <select
                  id="prev1_country"
                  name="prev1_country"
                  required
                  className="w-full p-3 rounded-md"
                >
                  <option value="US">Estados Unidos</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prev1_address_line1" className="block">
                    Dirección Línea 1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev1_address_line1"
                    type="text"
                    name="prev1_address_line1"
                    required
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="prev1_address_line2" className="block">
                    Dirección Línea 2
                  </label>
                  <input
                    id="prev1_address_line2"
                    type="text"
                    name="prev1_address_line2"
                    className="w-full p-3 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="prev1_city" className="block">
                    Ciudad <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev1_city"
                    type="text"
                    name="prev1_city"
                    required
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="prev1_state" className="block">
                    Estado <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev1_state"
                    type="text"
                    name="prev1_state"
                    required
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="prev1_zip" className="block">
                    Código Postal <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev1_zip"
                    type="text"
                    name="prev1_zip"
                    required
                    className="w-full p-3 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="prev1_start_title" className="block">
                Puesto Inicial en la Empresa{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="prev1_start_title"
                type="text"
                name="prev1_start_title"
                required
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="prev1_responsibilities" className="block">
                Responsabilidades en la Empresa{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="prev1_responsibilities"
                name="prev1_responsibilities"
                required
                className="w-full p-3 rounded-md"
                rows={3}
              />
            </div>

            <div>
              <label htmlFor="prev1_years_worked" className="block">
                Años Trabajados en la Empresa
              </label>
              <input
                id="prev1_years_worked"
                type="number"
                name="prev1_years_worked"
                step="0.1"
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="prev1_end_title" className="block">
                Puesto Final en la Empresa
              </label>
              <input
                id="prev1_end_title"
                type="text"
                name="prev1_end_title"
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="prev1_reason_leaving" className="block">
                Razón de Salida
              </label>
              <input
                id="prev1_reason_leaving"
                type="text"
                name="prev1_reason_leaving"
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="prev1_contact_permission" className="block">
                ¿Podemos contactar a este empleador como referencia?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="prev1_contact_permission"
                name="prev1_contact_permission"
                required
                className="w-full p-3 rounded-md"
              >
                <option value="">Seleccione una opción</option>
                <option value="Yes">Sí</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Previous Employment 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Empleo Anterior</h2>

            <div>
              <label htmlFor="prev2_company_name" className="block">
                Nombre de la Empresa <span className="text-red-500">*</span>
              </label>
              <input
                id="prev2_company_name"
                type="text"
                name="prev2_company_name"
                required
                className="w-full p-3 rounded-md"
              />
            </div>

            {/* Previous Employer 2 Address */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Dirección de la Empresa</h3>

              <div>
                <label htmlFor="prev2_country" className="block">
                  País <span className="text-red-500">*</span>
                </label>
                <select
                  id="prev2_country"
                  name="prev2_country"
                  required
                  className="w-full p-3 rounded-md"
                >
                  <option value="US">Estados Unidos</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prev2_address_line1" className="block">
                    Dirección Línea 1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev2_address_line1"
                    type="text"
                    name="prev2_address_line1"
                    required
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="prev2_address_line2" className="block">
                    Dirección Línea 2
                  </label>
                  <input
                    id="prev2_address_line2"
                    type="text"
                    name="prev2_address_line2"
                    className="w-full p-3 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="prev2_city" className="block">
                    Ciudad <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev2_city"
                    type="text"
                    name="prev2_city"
                    required
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="prev2_state" className="block">
                    Estado <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev2_state"
                    type="text"
                    name="prev2_state"
                    required
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="prev2_zip" className="block">
                    Código Postal <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="prev2_zip"
                    type="text"
                    name="prev2_zip"
                    required
                    className="w-full p-3 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="prev2_start_title" className="block">
                Puesto Inicial en la Empresa{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="prev2_start_title"
                type="text"
                name="prev2_start_title"
                required
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="prev2_responsibilities" className="block">
                Responsabilidades en la Empresa{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="prev2_responsibilities"
                name="prev2_responsibilities"
                required
                className="w-full p-3 rounded-md"
                rows={3}
              />
            </div>

            <div>
              <label htmlFor="prev2_years_worked" className="block">
                Años Trabajados en la Empresa
              </label>
              <input
                id="prev2_years_worked"
                type="number"
                name="prev2_years_worked"
                step="0.1"
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="prev2_end_title" className="block">
                Puesto Final en la Empresa{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="prev2_end_title"
                type="text"
                name="prev2_end_title"
                required
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="prev2_reason_leaving" className="block">
                Razón de Salida
              </label>
              <input
                id="prev2_reason_leaving"
                type="text"
                name="prev2_reason_leaving"
                className="w-full p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="prev2_contact_permission" className="block">
                ¿Podemos contactar a este empleador como referencia?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="prev2_contact_permission"
                name="prev2_contact_permission"
                required
                className="w-full p-3 rounded-md"
              >
                <option value="">Seleccione una opción</option>
                <option value="Yes">Sí</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Skills and Certification */}
          <div className="space-y-4">
            <div>
              <label htmlFor="skills_qualifications" className="block">
                Resuma sus Habilidades o Calificaciones Especiales{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="skills_qualifications"
                name="skills_qualifications"
                required
                className="w-full p-3 rounded-md"
                rows={4}
              />
            </div>

            <div>
              <label htmlFor="certification_agreement" className="block">
                Certificación y Acuerdo <span className="text-red-500">*</span>
              </label>
              <select
                id="certification_agreement"
                name="certification_agreement"
                required
                className="w-full p-3 rounded-md"
              >
                <option value="">Seleccione una opción</option>
                <option value="I Agree">Ace pto</option>
              </select>
              <p className="text-sm/80 mt-2">
                Certifico que mis respuestas son verdaderas y completas según mi
                mejor conocimiento. Autorizo las investigaciones y consultas
                necesarias sobre mis antecedentes personales, laborales,
                educativos, financieros y otros asuntos relacionados que puedan
                ser necesarios para una decisión de empleo. Por la presente
                libero de toda responsabilidad a empleadores, escuelas o
                individuos al responder a consultas relacionadas con mi
                solicitud. En caso de ser empleado, entiendo que la información
                falsa o engañosa proporcionada en mi solicitud o entrevista(s)
                puede resultar en el despido.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn-main square"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Solicitud"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CareerPintorMasero;
