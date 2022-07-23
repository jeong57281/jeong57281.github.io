import React, { useContext } from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "contexts/theme";
import { Helmet } from "react-helmet";
import * as style from "assets/styles/pages/404.module.scss";
import ContentLayout from "layouts/content-layout";

const NotFoundPage = ({ data }) => {
  // dark mode
  const { theme } = useContext(ThemeContext);
  // for title
  const { nickname } = data.site.siteMetadata;
  return (
    <section className={!theme ? style.notFound : style.notFoundDark}>
      <Helmet title={`${nickname}'s blog`}/>
      <ContentLayout data={data}>
        <div className={style._404}>
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </ContentLayout>
    </section>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        nickname
        github
        instagram
        gmail
        tistory
      }
    }
  }
`;

export default NotFoundPage;