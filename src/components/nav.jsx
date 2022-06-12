import React, { useContext, useEffect, useState } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "contexts/theme";
import * as style from "assets/styles/components/nav.module.scss";
import Sun from "assets/img/sun.svg";
import Moon from "assets/img/moon.svg";
import Left from "assets/img/left.svg";

const Nav = ({ location }) => {
  // dark mode
  const { theme, setTheme } = useContext(ThemeContext);
  const ThemeSwitchIcon = !theme ? Sun : Moon;
  // current page
  let page = 'blog';
  const paths = location.pathname.split('/').filter(el => el !== '');
  if(paths.length && paths[0] === 'about') page = 'about';
  if(paths.length && paths[0] === 'portfolio') page = 'portfolio';
  // minimize navgation bar
  let initMinimize = '';
  if(typeof localStorage !== 'undefined'){
    if(localStorage.getItem('minimize')) initMinimize = 'small';
    if(page === 'portfolio') {
      initMinimize = 'small';
      localStorage.setItem("minimize", 'small');
    }
  }
  const [minimize, setMinimize] = useState(initMinimize);
  useEffect(() => {
    if(page === 'portfolio') {
      setMinimize(true);
      localStorage.setItem("minimize", 'small');
    }
  }, [location]);
  useEffect(() => {
    if(localStorage.getItem('theme')) setTheme('dark');
  }, []);
  return (
    <nav className={!theme ? style.nav : style.navDark}>
      <div className={minimize ? style.small : style.big}>
        <ul>
          <li>
            <Link to='/about' className={page !== 'blog' ? style.active : ''}>
              {`Ab${!minimize ? 'ou' : ''}t`}
            </Link>
          </li>
          <li>
            <Link to='/' className={page === 'blog' ? style.active : ''}>
              {`Bl${!minimize ? 'o' : ''}g`}
            </Link>
          </li>
        </ul>
        <div className={style.navControl}>
          <button
            onClick={() => {
              const _theme = theme === '' ? 'dark' : '';
              localStorage.setItem("theme", _theme);
              setTheme(_theme);
            }}
          >
            <div className={style.modeSwitch}>
              <ThemeSwitchIcon/>
            </div>
          </button>
          <button
            onClick={() => {
              const _minimize = minimize === '' ? 'small' : '';
              localStorage.setItem("minimize", _minimize);
              setMinimize(_minimize);
            }}
          >
            <div className={style.slideSwitch}>
              <Left/>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;