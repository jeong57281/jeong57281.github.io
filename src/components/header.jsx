import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "contexts/theme";
import * as style from "assets/styles/components/header.module.scss";
import Toc from "components/toc";
import Sun from "assets/img/sun.svg";
import Moon from "assets/img/moon.svg";
import get from "lodash/get";

const Header = ({ location, data }) => {
  const { markdownRemark, allMarkdownRemark } = data;
  const nickname = get(data, 'site.siteMetadata.nickname', false);
  const html = get(markdownRemark, 'tableOfContents', false);
  const group = get(allMarkdownRemark, 'group', false);
  // parse query string
  const params = new URLSearchParams(location.search);
  const tag = params.get('tag') || '';
  // scroll top func
  const scrollTop = () => {
    const scroll = document.querySelector('#scroll');
    if(scroll) scroll.scrollTo(0, 0);
  }
  // mobile Navigation bar
  const [mNav, setmNav] = useState(false);
  // dark mode
  const { theme, setTheme } = useContext(ThemeContext);
  const ThemeSwitchIcon = !theme ? Sun : Moon;
  // current page
  let page = 'blog';
  const paths = location.pathname.split('/').filter(el => el !== '');
  if(paths.length && paths[0] === 'about') page = 'about';
  if(paths.length && paths[0] === 'portfolio') page = 'portfolio';
  // header class
  let headerClass = !theme ? style.header : style.headerDark;
  if(mNav) headerClass += ` ${style.show}`;
  return (
    <header className={headerClass}>
      <div className={style.headerControl}>
        <Link
          to={page === 'portfolio' ? '/portfolio' : '/'}
          onClick={() => {
            const scroll = document.querySelector('#scroll');
            if(page === 'portfolio' && scroll) scroll.scrollTo(0, 0);
          }}
        >
          {nickname}
          <span>
            {page !== 'portfolio' ? '\'s blog' : '\'s portfolio'}
          </span>
        </Link>
        <button onClick={() => setmNav(!mNav)}>
          <div className={`${style.line} ${style.top}`} />
          <div className={`${style.line} ${style.middle}`} />
          <div className={`${style.line} ${style.bottom}`} />
        </button>
      </div>
      <div
        className={style.mobileNav}
        onClick={() => setmNav(false)}
      >
        <nav
          className={style.mobileMenu}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.mobileMenuLink}>
            <ul>
              <li onClick={() => setmNav(false)}>
                <Link to='/about' className={page !== 'blog' ? style.active : ''}>
                  About
                </Link>
              </li>
              <li onClick={() => setmNav(false)}>
                <Link to='/' className={page === 'blog' ? style.active : ''}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.mobileAside}>
            { html &&
              <Toc
                html={html}
                title={markdownRemark.frontmatter.title}
                titleId={markdownRemark.id.replaceAll(/[0-9\-]/g, '')}
              />
            }
            { group &&
              <div className={style.blogTags}>
                <ul className={style.blogTagsList}>
                  <li>
                    <Link
                      to='/'
                      className={!tag ? style.active : ''}
                      onClick={() => {
                        setmNav(false);
                        scrollTop();
                      }}
                    >
                      All
                    </Link>
                  </li>
                  {group.map((el, idx) => {
                    return(
                      <li key={idx}>
                        { el.tags && 
                          <Link
                            to={`/?tag=${encodeURI(el.tags)}`}
                            className={tag === el.tags ? style.active : ''}
                            onClick={() => {
                              setmNav(false);
                              scrollTop();
                            }}
                          >
                            {`#${el.tags}`}
                          </Link>
                        }
                      </li>
                    );
                  })}
                </ul>
              </div>
            }
          </div>
          <div className={style.mobileMenuControl}>
            <button
              onClick={() => {
                const _theme = theme === '' ? 'dark' : '';
                localStorage.setItem("theme", _theme);
                setTheme(_theme);
              }}
            >
              <ThemeSwitchIcon/>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;