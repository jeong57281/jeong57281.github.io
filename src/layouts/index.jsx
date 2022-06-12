import React, { useState } from "react";
import Header from "components/header";
import Nav from "components/nav";
import { ThemeContext } from "contexts/theme";
import { HelmetProvider } from 'react-helmet-async';
import * as style from "assets/styles/layouts/index.module.scss";
import "assets/styles/global.scss";
import SideLayout from "layouts/side-layout";

const Index = ({ children, location, data }) => {
  // dark mode
  const [theme, setTheme] = useState('');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HelmetProvider>
        <main className={!theme ? style.main : style.mainDark}>
          <div className={style.header}>
            <Header location={location} data={data}/>
          </div>
          <div className={style.section}>
            <SideLayout
              aside={<Nav location={location}/>}
              section={<>{children}</>}
            />
          </div>
        </main>
      </HelmetProvider>
    </ThemeContext.Provider>
  );
};

export default Index;