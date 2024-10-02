import React, { createContext, useState, useEffect } from 'react';
import translations from './translations';

// Cria o contexto
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Estado de idioma
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en'
  );

  // Atualiza o localStorage sempre que o idioma for alterado
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Função para tradução
  const t = (key) => {
    return translations[language][key] || key;
  };

  // Provedor do contexto, fornecendo o idioma e a função de tradução
  return (
    <LanguageContext.Provider value={{ t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
