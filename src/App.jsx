import { useState, useEffect, useContext } from 'react';

import './App.css';

// import translations from './translations';

import { Clock } from './ui/components';
import {
  Home,
  Watch,
  Settings,
  Calculator,
  Project,
  About,
  Contact,
  Spacetourism,
} from './ui/applications';
import { LanguageProvider } from './ui/contexts/LanguageContext/LanguageContext';

function App() {
  const [openedApp, setOpenedApp] = useState('Home');

  const setTheme = (theme) => {
    document.querySelector('body').setAttribute('data-theme', theme);
    alert('Theme selected: ' + theme);
  };

  // Recupera o idioma do localStorage, ou usa 'en' como padrão
  // const [language, setLanguage] = useState(
  //   localStorage.getItem('language') || 'en'
  // );

  // Atualiza o localStorage sempre que o idioma for alterado
  // useEffect(() => {
  //   localStorage.setItem('language', language);
  // }, [language]);

  const changeLanguage = (language) => {
    alert('Language Selected: ' + language);
  };

  // Acessa as traduções com base no idioma atual
  // const t = (key) => {
  //   return translations[language][key] || key;
  // };

  const setBackground = (background) => {
    alert('Language Selected: ' + background);
  };

  const setTimestamp = (timestamp) => {
    alert('TimeStamp Selected: ' + timestamp);
  };

  const apps = {
    Home: <Home setOpenedApp={setOpenedApp} />,
    Watch: <Watch />,
    Calculator: <Calculator />,
    Settings: (
      <Settings
        setTheme={setTheme}
        changeLanguage={changeLanguage}
        setBackground={setBackground}
        setTimestamp={setTimestamp}
        setOpenedApp={setOpenedApp}
      />
    ),
    About: <About />,
    Contact: <Contact />,
    Project: <Project />,
    Spacetourism: <Spacetourism />,
  };

  return (
    <LanguageProvider>
      <div className="Cellphone">
        <div className="App">
          <div className="topPart">
            <Clock size={18} /> {/* Alterar Formatao de SIZE */}
            <p className="language">AAA</p>
          </div>

          {apps[openedApp]}

          <div className="actionBtns">
            <button
              onClick={() => {
                setOpenedApp('Home'), localStorage.clear();
                if (openedApp != 'Home') {
                  console.log('SnapshotApp');
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
              home
            </button>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
