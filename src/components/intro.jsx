import React, { useContext } from "react";
import { ThemeContext } from "contexts/theme";
import * as style from "assets/styles/components/intro.module.scss";

const Intro = ({ data }) => {
  const { profile, name, description, about } = data.site.siteMetadata;
  const { theme } = useContext(ThemeContext);
  return (
    <div className={!theme ? style.intro : style.introDark}>
      <div className={style.profile}>
        <div className={style.profileIntro}>
          <div className={style.profileImage}>
            <div className={style.ratio}>
              <img src={profile}/>
            </div>
          </div>
          <div className={style.profileInfo}>
            <div className={style.profileText}>
              <h1>{name}</h1>
              <h3>{`"${description}"`}</h3>
            </div>
          </div>
        </div>
        <div className={style.profileAbout}>
          <h1>About me</h1>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;