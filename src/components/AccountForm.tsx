import { FormEvent, useState } from "react";
import type { AccountData } from "../types";

type AccountFormProps = {
  account: AccountData;
  onSave: (account: AccountData) => void;
};

type Field = {
  key: keyof AccountData;
  label: string;
  type?: string;
};

const personalFields: Field[] = [
  { key: "fullName", label: "Full Name" },
  { key: "email", label: "Email", type: "email" },
  { key: "phone", label: "Phone Number", type: "tel" },
];

const addressFields: Field[] = [
  { key: "addressLine", label: "Address Line" },
  { key: "city", label: "City" },
  { key: "district", label: "District" },
  { key: "postalCode", label: "Postal Code" },
];

const passwordFields: Field[] = [
  { key: "currentPassword", label: "Current Password", type: "password" },
  { key: "newPassword", label: "New Password", type: "password" },
  { key: "confirmPassword", label: "Confirm Password", type: "password" },
];

export function AccountForm({ account, onSave }: AccountFormProps) {
  const [draft, setDraft] = useState(account);

  const updateField = (key: keyof AccountData, value: string) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    onSave(draft);
  };

  return (
    <form className="py-8 lg:pl-12" onSubmit={submit}>
      <div className="mb-9 flex items-end justify-between gap-6 border-b border-[#111] pb-6">
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-editorial text-[#666]">Profile</p>
          <h2 className="font-serif text-3xl uppercase tracking-editorial">Account Information</h2>
        </div>
      </div>

      <FormSection fields={personalFields} title="Personal Information" values={draft} onChange={updateField} />
      <FormSection fields={addressFields} title="Address" values={draft} onChange={updateField} />
      <FormSection fields={passwordFields} title="Password" values={draft} onChange={updateField} />

      <div className="mt-10 grid gap-3 border-t border-[#111] pt-7 sm:flex sm:justify-end">
        <button
          className="h-12 border border-[#111] bg-white px-8 text-[11px] font-semibold uppercase tracking-editorial text-[#111] transition hover:bg-[#111] hover:text-white"
          onClick={() => setDraft(account)}
          type="button"
        >
          Cancel
        </button>
        <button className="h-12 border border-[#111] bg-[#111] px-8 text-[11px] font-semibold uppercase tracking-editorial text-white transition hover:bg-white hover:text-[#111]" type="submit">
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
    <section className="border-b border-[#d6d6d6] py-8">
      <h3 className="mb-6 font-serif text-xl uppercase tracking-editorial">{title}</h3>
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label className={field.key === "addressLine" ? "block md:col-span-2" : "block"} key={field.key}>
            <span className="mb-2 block text-[11px] font-medium uppercase tracking-editorial">{field.label}</span>
            <input
              className="h-12 w-full border border-[#d6d6d6] bg-white px-4 text-sm transition focus:border-[#111]"
              onChange={(event) => onChange(field.key, event.target.value)}
              type={field.type || "text"}
              value={values[field.key]}
            />
          </label>
        ))}
      </div>
    </section>
  );
}
