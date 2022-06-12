import React from "react";
import * as style from "assets/styles/layouts/content-layout.module.scss";

const ContentLayout = ({ children }) => {
  return (
    <div className={style.layout}>
      <div className={style.wrapperPadding}>
        {children}
      </div>
    </div>
  );
}

export default ContentLayout;