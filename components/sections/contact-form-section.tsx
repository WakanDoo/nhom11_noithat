"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { FormField, Input, Select, TextArea } from "@/components/ui/form-field";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  projectType: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  projectType: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s-]{7,15}$/;

function validateField(field: keyof FormValues, value: string): string {
  if (!value.trim()) return "This field is required";

  if (field === "email" && !EMAIL_REGEX.test(value.trim())) {
    return "Invalid email format";
  }

  if (field === "phoneNumber" && !PHONE_REGEX.test(value.trim())) {
    return "Invalid phone number format";
  }

  return "";
}

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(values) as Array<keyof FormValues>).forEach((field) => {
    const message = validateField(field, values[field]);
    if (message) errors[field] = message;
  });
  return errors;
}

export function ContactFormSection() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange =
    (field: keyof FormValues) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const nextValue = event.target.value;
      setValues((current) => ({ ...current, [field]: nextValue }));
      if (successMessage) setSuccessMessage("");

      setErrors((current) => {
        if (!current[field]) return current;
        const nextError = validateField(field, nextValue);
        return { ...current, [field]: nextError || undefined };
      });
    };

  const handleBlur = (field: keyof FormValues) => {
    const nextError = validateField(field, values[field]);
    setErrors((current) => ({ ...current, [field]: nextError || undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("Message sent successfully");
    setValues(INITIAL_VALUES);
    setErrors({});
  };

  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-content flex flex-col gap-10 md:gap-12 lg:gap-14 px-4 md:px-6 lg:px-10 py-14 md:py-[72px] lg:py-[88px] lg:pb-24">
        <div className="reveal-on-scroll flex flex-col items-center gap-4 text-center">
          <h2 className="font-cormorant text-[32px] leading-[34px] md:text-[44px] md:leading-[46px] lg:text-display-sm font-normal text-owl-black tracking-[-0.4px] m-0">
            Let&apos;s Talk
          </h2>
          <p className="max-w-[960px] font-inter text-sm md:text-lg lg:text-body-lg font-light text-owl-text-secondary m-0">
            Share your vision with us and let our team of experts bring it to
            life
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 items-start">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="reveal-on-scroll flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="First Name" error={errors.firstName}>
                <Input
                  id="firstName"
                  placeholder="John"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                  onBlur={() => handleBlur("firstName")}
                  error={Boolean(errors.firstName)}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={
                    errors.firstName ? "firstName-error" : undefined
                  }
                />
              </FormField>
              <FormField label="Last Name" error={errors.lastName}>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  onBlur={() => handleBlur("lastName")}
                  error={Boolean(errors.lastName)}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={
                    errors.lastName ? "lastName-error" : undefined
                  }
                />
              </FormField>
            </div>

            <FormField label="Email" error={errors.email}>
              <Input
                id="email"
                placeholder="name@email.com"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={() => handleBlur("email")}
                error={Boolean(errors.email)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </FormField>

            <FormField label="Phone Number" error={errors.phoneNumber}>
              <Input
                id="phoneNumber"
                placeholder="+84 912 345 678"
                type="tel"
                value={values.phoneNumber}
                onChange={handleChange("phoneNumber")}
                onBlur={() => handleBlur("phoneNumber")}
                error={Boolean(errors.phoneNumber)}
                aria-invalid={Boolean(errors.phoneNumber)}
                aria-describedby={
                  errors.phoneNumber ? "phoneNumber-error" : undefined
                }
              />
            </FormField>

            <FormField label="Project Type" error={errors.projectType}>
              <Select
                id="projectType"
                value={values.projectType}
                onChange={handleChange("projectType")}
                onBlur={() => handleBlur("projectType")}
                error={Boolean(errors.projectType)}
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={
                  errors.projectType ? "projectType-error" : undefined
                }
              >
                <option value="">Select a project type...</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="renovation">Renovation</option>
                <option value="other">Other</option>
              </Select>
            </FormField>

            <FormField label="Message" error={errors.message}>
              <TextArea
                id="message"
                placeholder="Tell us about your project..."
                rows={5}
                value={values.message}
                onChange={handleChange("message")}
                onBlur={() => handleBlur("message")}
                error={Boolean(errors.message)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
              />
            </FormField>

            <div className="flex justify-start pt-2">
              <Button type="submit" variant="primary" icon>
                Send Message
              </Button>
            </div>

            {successMessage && (
              <p className="font-inter text-body-xs text-owl-success m-0 transition-opacity duration-300 ease-in-out">
                {successMessage}
              </p>
            )}
          </form>

          <div className="interactive-card reveal-on-scroll min-h-[360px] md:min-h-[440px] lg:min-h-[560px] overflow-hidden rounded-2xl bg-[#f7f3ee] shadow-map">
            <iframe
              title="OWLHOME Location - Thu Duc, Ho Chi Minh City"
              src="https://www.google.com/maps?q=Thu%20Duc%2C%20Ho%20Chi%20Minh%20City&z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "inherit" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-full min-h-[360px] md:min-h-[440px] lg:min-h-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
