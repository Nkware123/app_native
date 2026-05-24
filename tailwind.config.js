/** @type {import('tailwindcss').Config} */
module.exports = {
  // ⚠️ Vérifie que ces chemins incluent TOUS tes composants
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",      // Dossier principal des routes
    "./components/**/*.{js,jsx,ts,tsx}", // Tes composants réutilisables
    "./src/**/*.{js,jsx,ts,tsx}",      // Si tu utilises un dossier src
  ],
  presets: [require("nativewind/preset")], // ← CRUCIAL pour NativeWind v4
  theme: {
    extend: {},
  },
  plugins: [],
};