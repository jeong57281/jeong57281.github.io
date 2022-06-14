import React, { useState, useEffect } from "react";
import Header from "components/header";
import Nav from "components/nav";
import { ThemeContext } from "contexts/theme";
import { HelmetProvider } from 'react-helmet-async';
import * as style from "assets/styles/layouts/index.module.scss";
import "assets/styles/global.scss";

const Index = ({ children, location, data }) => {
  const [ready, setReady] = useState(false); // conditional rendering
  const [minimize, setMinimize] = useState(''); // minimize navgation bar
  const [theme, setTheme] = useState(''); // dark mode
  useEffect(() => {
    // get ios view height
    const setScreenSize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
    window.addEventListener('resize', () => setScreenSize());
    // get local storage item
    if(localStorage.getItem('minimize')) setMinimize('small');
    if(localStorage.getItem('theme')) setTheme('dark');
    setReady(true);
  }, [])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HelmetProvider>
        { ready &&
          <div className={!theme ? style.layout: style.layoutDark}>
            <div className={style.header}>
              <Header location={location} data={data}/>
            </div>
            <main className={style.main}>
              <div className={style.nav}>
                <Nav
                  location={location}
                  minimize={minimize}
                  setMinimize={setMinimize}
                />
              </div>
              <div className={`${style.section} ${minimize ? style.small : style.big}`}>
                {children}
              </div>
            </main>
          </div>
        }
      </HelmetProvider>
    </ThemeContext.Provider>
  );
};

export default Index;