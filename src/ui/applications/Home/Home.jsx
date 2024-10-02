import './Home.css';
import './Carousel.css';

import dataApps from './homedata.json';

import { Notification, Clock, Appcomponent } from '../../components';

import { useState, useRef, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext/LanguageContext';

const Home = ({ setOpenedApp }) => {
  const { t, setLanguage } = useContext(LanguageContext); // nao precisa de setLanguage?

  // Slider Functions
  const slides = [1, 2, 3, 4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [translate, setTranslate] = useState(0);
  const carouselRef = useRef(null);

  const [blockOpenApp, setblockOpenApp] = useState(false);

  const handleClick = (value) => {
    //validação para nao estar movendo a tela quando clica
    if (blockOpenApp == false) {
      setOpenedApp(value);
    }
  };

  // Função para capturar o início do clique/arraste
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartPosition(event.clientX);
  };

  // Função para mover o slide de acordo com o arraste
  const handleMouseMove = (event) => {
    if (isDragging) {
      const currentPosition = event.clientX;
      setTranslate(currentPosition - startPosition);
      setblockOpenApp(true);
    } else {
      setblockOpenApp(false);
    }
  };

  // Função para parar o movimento do arraste e decidir se muda de slide
  const handleMouseUp = () => {
    setIsDragging(false);
    if (translate > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Vai para o slide anterior
    } else if (translate < -50 && currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1); // Vai para o próximo slide
    }
    setTranslate(0);
  };

  const handleNavClick = (i) => {
    setCurrentIndex(i);
  };

  return (
    <div
      className="home application"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={carouselRef}
    >
      <div className="carrouselContainer">
        <div
          className="carrouselSlides"
          style={{
            transform: `translateX(calc(-${
              currentIndex * 100
            }% + ${translate}px))`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          <div className="carrouselSlide">
            <div className="weatherContainer w1 h1">
              {/* {isDragging == true ? <div>dragging</div> : <div>notdraggin</div>}
              {translate}
              {blockOpenApp == true ? (
                <div>blockOpenApp</div>
              ) : (
                <div>no block drag</div>
              )} */}
              20° Chuva
            </div>

            <div className="clockContainer w2 h1">
              <Clock size={50} />
            </div>

            <div className="notificationContainer w3 h2 ph">
              <Notification />
            </div>

            <div
              className="appWrapper"
              onClick={() => handleClick('Watch')}
              onMouseOver={() => setblockOpenApp(true)}
              onMouseOut={() => setblockOpenApp(false)}
            >
              <div className="appIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="icon"
                >
                  <path
                    fill="currentcolor"
                    d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                  />
                </svg>
              </div>
              <p className="appTitle">{t('watch')}</p>
            </div>

            <div
              className="appWrapper"
              onClick={() => handleClick('Calculator')}
            >
              <div className="appIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="icon"
                >
                  <path
                    fill="currentcolor"
                    d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"
                  />
                </svg>
              </div>
              <p className="appTitle">{t('calculator')}</p>
            </div>

            <div className="appWrapper" onClick={() => handleClick('Settings')}>
              <div className="appIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="icon"
                >
                  <path
                    fill="currentcolor"
                    d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                  />
                </svg>
              </div>
              <p className="appTitle">{t('settings')}</p>
            </div>

            <div className="appWrapper">
              <a
                href="https://www.linkedin.com/in/fabr%C3%ADcio-d-agostini-5a87542b1/"
                target="_blank"
              >
                <div className="appIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="icon"
                  >
                    <path
                      fill="currentcolor"
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                    />
                  </svg>
                </div>
                <p className="appTitle">Ln</p>
              </a>
            </div>

            <div className="appWrapper">
              <a href="https://www.figma.com/@fabriciodagosti" target="_blank">
                <div className="appIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="icon"
                  >
                    <path
                      fill="currentcolor"
                      d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z"
                    />
                  </svg>
                </div>
                <p className="appTitle">Figma</p>
              </a>
            </div>

            <div className="appWrapper">
              <a href="https://github.com/FabricioDag" target="_blank">
                <div className="appIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="icon"
                  >
                    <path
                      fill="currentcolor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </div>
                <p className="appTitle">Github</p>
              </a>
            </div>
          </div>

          <div className="carrouselSlide">
            <div className="pageTitlePh h1 w3">{t('competencies')}</div>

            <div
              className="appWrapper"
              onClick={() => handleClick('Spacetourism')}
            >
              <div className="appIcon"></div>
              <p className="appTitle">SpaceTourism</p>
            </div>

            <div className="appWrapper">
              <div className="appIcon"></div>
              <p className="appTitle">Javascript</p>
            </div>

            <div className="appWrapper">
              <div className="appIcon"></div>
              <p className="appTitle">Vue</p>
            </div>

            <div className="appWrapper">
              <div className="appIcon"></div>
              <p className="appTitle">CSS</p>
            </div>
          </div>

          <div className="carrouselSlide">
            <div className="pageTitlePh h1 w3">{t('projects')}</div>

            <div className="appWrapper" onClick={() => handleClick('Project')}>
              <div className="appIcon"></div>
              <p className="appTitle">Project</p>
            </div>

            <div className="appWrapper" onClick={() => handleClick('Project')}>
              <div className="appIcon"></div>
              <p className="appTitle">Project</p>
            </div>

            <div className="appWrapper" onClick={() => handleClick('Project')}>
              <div className="appIcon"></div>
              <p className="appTitle">Project</p>
            </div>
          </div>

          <div className="carrouselSlide">
            <div className="pageTitlePh h1 w3">Teste P4</div>
            {/* ESTA AQUI ATÉ RESOLVER O NUMERO DE PAGINAÇÃO */}
          </div>
        </div>
      </div>

      <div className="fixed">
        <div className="navigation">
          {slides.map((index) => (
            <span
              className={parseInt(index) === currentIndex + 1 ? 'active' : ''}
              key={index}
              onClick={() => handleNavClick(index - 1)}
            ></span>
          ))}
        </div>

        <div className="fixedApps">
          <div className="appWrapper" onClick={() => handleClick('About')}>
            <div className="appIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="icon"
              >
                <path
                  fill="currentcolor"
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                />
              </svg>
            </div>
            <p className="appTitle">{t('about')}</p>
          </div>

          <div className="appWrapper" onClick={() => handleClick('Contact')}>
            <div className="appIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="icon"
              >
                <path
                  fill="currentcolor"
                  d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                />
              </svg>
            </div>
            <p className="appTitle">{t('contact')}</p>
          </div>

          <div className="appWrapper" onClick={() => handleClick('Settings')}>
            <div className="appIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="icon"
              >
                <path
                  fill="currentcolor"
                  d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"
                />
              </svg>
            </div>
            <p className="appTitle">{t('resumee')} Set</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
