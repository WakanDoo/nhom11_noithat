import { FormEvent, useState } from "react";
import type { AccountData } from "../types";

type AccountInformationFormProps = {
  account: AccountData;
  onSave: (account: AccountData) => void;
};

type Field = {
  className?: string;
  key: keyof AccountData;
  label: string;
  placeholder?: string;
  type?: string;
};

const personalFields: Field[] = [
  { key: "fullName", label: "Full Name" },
  { key: "email", label: "Email", type: "email" },
  { className: "md:col-span-2", key: "phone", label: "Phone Number", type: "tel" },
];

const addressFields: Field[] = [
  { className: "md:col-span-2", key: "addressLine", label: "Address Line" },
  { key: "city", label: "City" },
  { key: "district", label: "District" },
  { key: "postalCode", label: "Postal Code" },
];

const passwordFields: Field[] = [
  {
    className: "md:col-span-2",
    key: "currentPassword",
    label: "Current Password",
    placeholder: "Enter current password",
    type: "password",
  },
  { key: "newPassword", label: "New Password", placeholder: "Enter new password", type: "password" },
  {
    key: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm new password",
    type: "password",
  },
];

export function AccountInformationForm({ account, onSave }: AccountInformationFormProps) {
  const [draft, setDraft] = useState(account);

  const updateField = (key: keyof AccountData, value: string) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    onSave(draft);
  };

  return (
    <form className="w-full bg-white lg:max-w-[832px]" onSubmit={submit}>
      <FormSection fields={personalFields} title="Personal Information" values={draft} onChange={updateField} />
      <FormSection fields={addressFields} title="Address" values={draft} onChange={updateField} />
      <FormSection fields={passwordFields} title="Password" values={draft} onChange={updateField} />

      <div className="mt-8 grid gap-3 border-t border-black/20 pt-8 sm:flex sm:justify-end sm:gap-4">
        <button
          className="h-[41px] border border-black bg-white px-10 text-[10px] font-medium uppercase tracking-[0.15em] text-black transition hover:bg-black hover:text-white sm:min-w-[132px]"
          onClick={() => setDraft(account)}
          type="button"
        >
          Cancel
        </button>
        <button
          className="h-[41px] border border-black bg-black px-10 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-black sm:min-w-[178px]"
          type="submit"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

function FormSection({
  fields,
  onChange,
  title,
  values,
}: {
  fields: Field[];
  onChange: (key: keyof AccountData, value: string) => void;
  title: string;
  values: AccountData;
}) {
  return (
    <section className="mb-12">
      <h2 className="border-b border-black/20 pb-6 font-serif text-2xl font-semibold uppercase leading-[21px] tracking-[0.0875em] text-black">
        {title}
      </h2>
      <div className="mt-8 grid gap-x-6 gap-y-6 md:grid-cols-2">
        {fields.map((field) => (
          <label className={`block ${field.className || ""}`} key={field.key}>
            <span className="mb-3 block text-[14px] font-medium uppercase leading-[13.5px] tracking-[0.077em] text-black/60">
              {field.label}
            </span>
            <input
              className="h-[45px] w-full border border-black/20 bg-white px-4 text-[13px] leading-[19.5px] text-black transition placeholder:text-black/45 focus:border-black"
              onChange={(event) => onChange(field.key, event.target.value)}
              placeholder={field.placeholder}
              type={field.type || "text"}
              value={values[field.key]}
            />
          </label>
        ))}
      </div>
    </section>
  );
}
