import React, { createContext, useState, useContext } from 'react';


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


export function useLanguage  () {
  return useContext(LanguageContext);
};


const messages = {
  en: "Current time",
  it: "Ora corrente",
  es: "Hora actual",
  
};


export function getLocalizedMessage  (lang) {
  return messages[lang];
};