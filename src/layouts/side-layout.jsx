import React from "react";
import * as style from "assets/styles/layouts/side-layout.module.scss";

/**
 * @param {React.ReactElement} aside - fixed area
 * @param {React.ReactElement} section - variable area
 * @returns {React.ReactElement}
 */
const SideLayout = ({ aside, section }) => {
  return (
    <div className={style.sideLayout}>
      <aside className={style.aside}>
        {aside}
      </aside>
      <section className={style.section}>
        {section}
      </section>
    </div>
  );
}

export default SideLayout;