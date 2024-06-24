import React from "react";
import { useLanguage, getLocalizedMessage } from "./LanguageContext";

export default function Clock() {
  const { language } = useLanguage();
  const message = getLocalizedMessage(language);

  function getTime() {
    const now = new Date();
    return now.toLocaleTimeString(language);
  }

  return (
    <div>
      <p>
        {message}: {getTime()}
      </p>
    </div>
  );
}
