"use client";

import { FormEvent, useState } from "react";
import type { AccountData } from "../../src/types";
import styles from "./account.module.css";

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
  { className: styles.spanTwo, key: "phone", label: "Phone Number", type: "tel" },
];

const addressFields: Field[] = [
  { className: styles.spanTwo, key: "addressLine", label: "Address Line" },
  { key: "city", label: "City" },
  { key: "district", label: "District" },
  { key: "postalCode", label: "Postal Code" },
];

const passwordFields: Field[] = [
  {
    className: styles.spanTwo,
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
    <form className={styles.accountForm} onSubmit={submit}>
      <FormSection fields={personalFields} title="Personal Information" values={draft} onChange={updateField} />
      <FormSection fields={addressFields} title="Address" values={draft} onChange={updateField} />
      <FormSection fields={passwordFields} title="Password" values={draft} onChange={updateField} />

      <div className={styles.formActions}>
        <button className={styles.buttonSecondary} onClick={() => setDraft(account)} type="button">
          Cancel
        </button>
        <button className={styles.buttonPrimary} type="submit">
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
    <section className={styles.formSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.formGrid}>
        {fields.map((field) => (
          <label className={`${styles.field} ${field.className || ""}`} key={field.key}>
            <span>{field.label}</span>
            <input
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
