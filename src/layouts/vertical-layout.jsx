import React, { useContext } from "react";
import { ThemeContext } from "contexts/theme";
import * as style from "assets/styles/layouts/vertical-layout.module.scss";

const VerticalLayout = ({ children }) => {
  // dark mode
  const { theme } = useContext(ThemeContext);
  return (
    <div className={!theme ? style.layout : style.layoutDark}>
      <div className={style.dummyHeight}/>
      <div className={style.scroll} id="scroll">
        {children}
      </div>
    </div>
  );
}

export default VerticalLayout;