export const getEnvVariable = (key) => {
  if (
    typeof window.__envConfig__ !== "undefined" &&
    typeof window.__envConfig__[key] !== "undefined"
  ) {
    return window.__envConfig__[key];
  }

  return import.meta.env[`VITE_${key}`] || null;
};
