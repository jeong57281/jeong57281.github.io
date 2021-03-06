import React, { useContext } from "react";
import { ThemeContext } from "contexts/theme";
import * as style from "assets/styles/components/footer.module.scss";
import get from "loadsh/get";
import Gmail from "assets/img/gmail.svg";
import Github from "assets/img/github.svg";
import Instagram from "assets/img/instagram.svg";
import Tistory from "assets/img/tistory.svg";

const Footer = ({ data }) => {
  const github = get(data, 'site.siteMetadata.github', false);
  const instagram = get(data, 'site.siteMetadata.instagram', false);
  const gmail = get(data, 'site.siteMetadata.gmail', false);
  const tistory = get(data, 'site.siteMetadata.tistory', false);
  // dark mode
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={!theme ? style.footer : style.footerDark}>
      <h3>Contact & Channel</h3>
      <ul>
        { gmail && <li> <a href={`mailto:${gmail}`}> <Gmail/> </a> </li> }
        { github && <li> <a href={github}> <Github/> </a> </li> }
        { tistory && <li> <a href={tistory}> <Tistory/> </a> </li> }
        { instagram && <li> <a href={instagram}> <Instagram/> </a> </li> }
      </ul>
      <div className={style.footerCopyright}>
        © JeongHyeon Park. All rights reserved.
        <br />
        Powered by GitHub Pages.
      </div>
    </footer>
  );
}

export default Footer;