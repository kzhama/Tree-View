export function getFileExtension(filename: string) {
  const parts = filename.split(".");
  if (parts.length === 1) {
    return "No file extension found.";
  }

  return parts.pop();
}
