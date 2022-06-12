import React, { useContext } from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "contexts/theme";
import { Link } from "gatsby";
import { Helmet } from "react-helmet-async";
import * as style from "assets/styles/pages/404.module.scss";

const NotFoundPage = ({ data }) => {
  // dark mode
  const { theme } = useContext(ThemeContext);
  // for title
  const { nickname } = data.site.siteMetadata;
  return (
    <div className={!theme ? style.notFound : style.notFoundDark}>
      <Helmet title={`${nickname}'s blog`}/>
      <div className={style.notFoundBody}>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to="/">
          home
        </Link>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        nickname
      }
    }
  }
`;

export default NotFoundPage;