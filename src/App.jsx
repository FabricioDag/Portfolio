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
              Home
            </button>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
