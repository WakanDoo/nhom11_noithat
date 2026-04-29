export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path?: string | null): string {
  if (!path) return "";

  const value = String(path);

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("//") ||
    value.startsWith("data:") ||
    value.startsWith("blob:")
  ) {
    return value;
  }

  if (basePath && (value === basePath || value.startsWith(`${basePath}/`))) {
    return value;
  }

  return `${basePath}${value.startsWith("/") ? value : `/${value}`}`;
}
