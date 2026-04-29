import type { FormEvent } from "react";

import Button from "../ui/Button";
import Icon from "@/components/ui/Icon";
import Input from "@/components/ui/Input";

export type LoginValues = {
  email: string;
  password: string;
  remember: boolean;
};

type LoginErrors = Partial<Record<keyof LoginValues, string>>;

type LoginFormProps = {
  errors: LoginErrors;
  onChange: <K extends keyof LoginValues>(field: K, value: LoginValues[K]) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSwitch: () => void;
  values: LoginValues;
};

export default function LoginForm({
  errors,
  onChange,
  onSubmit,
  onSwitch,
  values,
}: LoginFormProps) {
  return (
    <form className="space-y-5" noValidate onSubmit={onSubmit}>
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
        autoComplete="current-password"
        error={errors.password}
        icon="lock"
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
        value={values.password}
        onChange={(event) => onChange("password", event.target.value)}
      />

      <div className="flex flex-col gap-3 text-sm text-[#43392d] sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex items-center gap-3">
          <input
            checked={values.remember}
            className="h-4 w-4 rounded border-[#c9a96e] text-[#c9a96e] focus:ring-[#c9a96e]"
            type="checkbox"
            onChange={(event) => onChange("remember", event.target.checked)}
          />
          Remember me
        </label>
        <button className="text-left font-medium transition-colors hover:text-[#c9a96e]" type="button">
          Forgot password?
        </button>
      </div>

      <Button fullWidth type="submit">
        Sign In
      </Button>

      <SocialButtons />

      <p className="text-center text-sm text-[#5e544a]">
        Don&apos;t have an account?{" "}
        <button
          className="font-semibold text-[#181818] transition-colors hover:text-[#c9a96e]"
          type="button"
          onClick={onSwitch}
        >
          Sign up
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
          <Icon className="text-[#ea3535]" name="google" size={18} />
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
