import { useState, useContext } from 'react';
import './Settings.css';
import { SettingsModal } from '../../components';

import { LanguageContext } from '../../contexts/LanguageContext/LanguageContext';

const Settings = ({
  setTheme,
  changeLanguage,
  setBackground,
  setTimestamp,
  setOpenedApp,
}) => {
  const { t, setLanguage } = useContext(LanguageContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeArray, setActiveArray] = useState([]);
  const [activeFunction, setActiveFunction] = useState(null);

  const [selectedBackground, setSelectedBackground] = useState('Clean');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedTimestamp, setSelectedTimestamp] = useState('00');
  const [selectedTheme, setSelectedTheme] = useState('Standard');

  const Backgrounds = ['Clean', 'Stamped'];
  const Themes = ['Dark', 'Standard', 'Light'];
  const Languages = ['pt', 'en', 'es'];
  const TimeStamp = ['00', '01', '02'];

  const handleOpenModal = (arr, func) => {
    setActiveArray(arr);
    setIsModalOpen(true);

    switch (func) {
      case 'setTheme':
        setActiveFunction(() => setTheme);
        break;
      case 'changeLanguage':
        setActiveFunction(() => setLanguage);
        break;
      case 'setBackground':
        setActiveFunction(() => setBackground);
        break;
      case 'setTimestamp':
        setActiveFunction(() => setTimestamp);
        break;
    }
  };

  return (
    <div className="Settings application">
      <h1>{t('settings')}</h1>

      <div className="settingsWrapper">
        <div className="settingOption" onClick={() => setOpenedApp('About')}>
          <div className="settingText">
            <p className="settingTitle">{t('about')}</p>
          </div>
          <hr />
        </div>

        <div
          className="settingOption"
          onClick={() => handleOpenModal(Backgrounds, 'setBackground')}
        >
          <div className="settingText">
            <p className="settingTitle">{t('background')}</p>
            <small className="settingActual">{selectedBackground}</small>
          </div>
          <hr />
        </div>

        <div
          className="settingOption"
          onClick={() => handleOpenModal(Languages, 'changeLanguage')}
        >
          <div className="settingText">
            <p className="settingTitle">{t('language')}</p>
            <small className="settingActual">{selectedLanguage}</small>
          </div>
          <hr />
        </div>

        {/* <div
          className="settingOption"
          onClick={() => handleOpenModal(TimeStamp, 'setTimestamp')}
        >
          <div className="settingText">
            <p className="settingTitle">Time Stamp</p>
            <small className="settingActual">{selectedTimestamp}</small>
          </div>
          <hr />
        </div> */}

        <div
          className="settingOption"
          onClick={() => handleOpenModal(Themes, 'setTheme')}
        >
          <div className="settingText">
            <p className="settingTitle">{t('theme')}</p>
            <small className="settingActual">{selectedTheme}</small>
          </div>
          <hr />
        </div>
      </div>

      <h2>Feedback</h2>

      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Selecione"
      >
        {activeArray.map((item, index) => (
          <div
            key={index}
            className="modalItem"
            onClick={() => {
              activeFunction(item);
              alert(item);
            }}
          >
            {item}
          </div>
        ))}
      </SettingsModal>
    </div>
  );
};

export { Settings };
