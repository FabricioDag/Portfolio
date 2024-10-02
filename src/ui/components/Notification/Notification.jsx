import { useState, useEffect } from 'react';
import './Notification.css';

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const hasShownNotification = localStorage.getItem('hasShownNotification');
    if (!hasShownNotification) {
      setIsFirstTime(true);
      setIsVisible(true);
      localStorage.setItem('hasShownNotification', 'true');
    } else {
      setIsVisible(true);
    }
  }, []);

  const closeNotification = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={`notification ${isFirstTime ? 'pop' : ''}`}>
        <p>Olá! Me chamo Fabrício e sou desenvolvedor Mobile e Web. </p>
        <p>
          Seja bem-vindo ao meu portifólio! Navegue pelas aplicações para saber
          mais sobre meu trabalho.
        </p>

        <small>Notificação 19:20h</small>
        <button className={'notificationBtn'} onClick={closeNotification}>
          Tudo Certo!
        </button>
      </div>
    )
  );
};

export { Notification };
