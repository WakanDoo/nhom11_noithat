import type { FormEvent } from "react";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Input from "@/components/ui/Input";

export type RegisterValues = {
  confirmPassword: string;
  email: string;
  fullName: string;
  password: string;
};

type RegisterErrors = Partial<Record<keyof RegisterValues, string>>;

type RegisterFormProps = {
  errors: RegisterErrors;
  onChange: <K extends keyof RegisterValues>(field: K, value: RegisterValues[K]) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSwitch: () => void;
  values: RegisterValues;
};

export default function RegisterForm({
  errors,
  onChange,
  onSubmit,
  onSwitch,
  values,
}: RegisterFormProps) {
  return (
    <form className="space-y-5" noValidate onSubmit={onSubmit}>
      <Input
        autoComplete="name"
        error={errors.fullName}
        icon="userOutline"
        label="Full name"
        name="fullName"
        placeholder="Full name"
        type="text"
        value={values.fullName}
        onChange={(event) => onChange("fullName", event.target.value)}
      />

      <Input
        autoComplete="email"
        error={errors.email}
        icon="envelope"
        label="Email"
        name="email"
        placeholder="Email address"
        type="email"
        value={values.email}
        onChange={(event) => onChange("email", event.target.value)}
      />

      <Input
        autoComplete="new-password"
        error={errors.password}
        icon="lock"
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
        value={values.password}
        onChange={(event) => onChange("password", event.target.value)}
      />

      <Input
        autoComplete="new-password"
        error={errors.confirmPassword}
        icon="checkCircle"
        label="Confirm password"
        name="confirmPassword"
        placeholder="Confirm password"
        type="password"
        value={values.confirmPassword}
        onChange={(event) => onChange("confirmPassword", event.target.value)}
      />

      <Button fullWidth type="submit">
        Create Account
      </Button>

      <SocialButtons />

      <p className="text-center text-sm text-[#5e544a]">
        Already have an account?{" "}
        <button
          className="font-semibold text-[#181818] transition-colors hover:text-[#c9a96e]"
          type="button"
          onClick={onSwitch}
        >
          Sign in
        </button>
      </p>
    </form>
  );
}

function SocialButtons() {
  return (
    <div className="space-y-5 pt-1">
      <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-[#6d6255]">
        <span className="h-px flex-1 bg-[#d7cab7]" />
        <span>Or</span>
        <span className="h-px flex-1 bg-[#d7cab7]" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button className="text-xs" fullWidth variant="outline">
          <Icon className="text-[#ea4335]" name="google" size={18} />
          Google
        </Button>
        <Button className="text-xs" fullWidth variant="outline">
          <Icon className="text-[#1877f2]" name="facebook" size={18} />
          Facebook
        </Button>
      </div>
    </div>
  );
}
