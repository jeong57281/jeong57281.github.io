import React, { useContext, useEffect } from "react";
import { ThemeContext } from "contexts/theme";
import Footer from "components/footer";
import * as style from "assets/styles/layouts/content-layout.module.scss";

const ContentLayout = ({ children, data }) => {
  // dark mode
  const { theme } = useContext(ThemeContext);
  return (
    <div id="scroll" className={!theme ? style.layout : style.layoutDark}>
      <div className={style.maxWidth}>
        <div className={style.minHeight}>
          <div className={style.padding}>
            {children}
          </div>
        </div>
      </div>
      <Footer data={data}/>
    </div>
  );
}

export default ContentLayout;