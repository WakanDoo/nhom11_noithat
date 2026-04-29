export type AccountData = {
  fullName: string;
  email: string;
  phone: string;
  addressLine: string;
  city: string;
  district: string;
  postalCode: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type AuthPayload = {
  email: string;
  password: string;
  mode: "signin" | "signup";
};

export type AccountNavItem = "ACCOUNT INFORMATION" | "ORDERS" | "WISHLIST" | "SETTINGS" | "LOGOUT";
