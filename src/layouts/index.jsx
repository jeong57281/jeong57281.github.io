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
  // get local storage item
  useEffect(() => {
    if(localStorage.getItem('minimize')) setMinimize('small');
    if(localStorage.getItem('theme')) setTheme('dark');
    setReady(true);
  }, [])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HelmetProvider>
        { ready &&
          <div className={!theme ? style.layout: style.layoutDark}>
            <header className={style.header}>
              <Header location={location} data={data}/>
            </header>
            <main className={style.main}>
              <nav className={style.nav}>
                <Nav
                  location={location}
                  minimize={minimize}
                  setMinimize={setMinimize}
                />
              </nav>
              <section className={`${style.section} ${minimize ? style.small : style.big}`}>
                {children}
              </section>
            </main>
          </div>
        }
      </HelmetProvider>
    </ThemeContext.Provider>
  );
};

export default Index;