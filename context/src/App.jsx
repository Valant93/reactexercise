import React from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import Clock from "./Clock";

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="it">Italiano</option>
      <option value="es">Español</option>
    </select>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <div>
        <h1>Lingua</h1>
        <LanguageSelector />
        <Clock />
      </div>
    </LanguageProvider>
  );
}
