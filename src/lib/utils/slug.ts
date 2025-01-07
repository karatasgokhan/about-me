export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace any non-alphanumeric character with a dash
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing dashes
}
