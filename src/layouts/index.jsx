import React, { useState, useEffect } from "react";
import Header from "components/header";
import Nav from "components/nav";
import { ThemeContext } from "contexts/theme";
import { HelmetProvider } from 'react-helmet-async';
import * as style from "assets/styles/layouts/index.module.scss";
import "assets/styles/global.scss";
import SideLayout from "layouts/side-layout";

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
          <main className={!theme ? style.main : style.mainDark}>
            <div className={style.header}>
              <Header location={location} data={data}/>
            </div>
            <div className={style.section}>
              <SideLayout
                aside={
                  <Nav
                    location={location}
                    minimize={minimize}
                    setMinimize={setMinimize}
                  />
                }
                section={<>{children}</>}
              />
            </div>
          </main>
        }
      </HelmetProvider>
    </ThemeContext.Provider>
  );
};

export default Index;