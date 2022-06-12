import React, { useEffect, useMemo, useContext } from "react";
import { useActiveHash  } from "hooks/useActiveHash";
import { ThemeContext } from "contexts/theme";
import * as style from "assets/styles/components/toc.module.scss";

const Toc = ({ html, title, titleId }) => {
  const targetedIds = useMemo(() => {
    const val = [];
    if(typeof document !== 'undefined'){
      const dummyDOM = document.createElement('html');
      dummyDOM.innerHTML = html;
      const justAnchors = dummyDOM.querySelectorAll('a');
      val.push(titleId);
      justAnchors.forEach(a => {
        val.push(a.hash.replace('#', ''));
      })
    }
    return val;
  }, [])
  const activeHash = useActiveHash(targetedIds);
  useEffect(() => {
    const ToClinks = document.querySelectorAll(`.${style.tocList} a`);
    ToClinks.forEach(a => {
      a.classList.remove(`${style.active}`);
    })
    const activeLinks = document.querySelectorAll(
      `.${style.tocList} a[href="#${encodeURI(activeHash)}"]`
    );
    activeLinks.forEach(a => {
      a.classList.add(`${style.active}`);
    })
  }, [activeHash])
  // dark mode 
  const { theme } = useContext(ThemeContext);
  return (
    <div className={!theme ? style.toc : style.tocDark}>
      <div className={style.tocList}>
        <a href={`#${titleId}`}>{title}</a>
        <div
          className={style.tocAuto}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export default Toc;