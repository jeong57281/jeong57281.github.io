import React, { useContext } from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "contexts/theme";
import { Link } from "gatsby";
import { Helmet } from "react-helmet-async";
import * as style from "assets/styles/pages/404.module.scss";
import VerticalLayout from "layouts/vertical-layout";
import ContentLayout from "layouts/content-layout";
import Footer from "components/footer";

const NotFoundPage = ({ data }) => {
  // dark mode
  const { theme } = useContext(ThemeContext);
  // for title
  const { nickname } = data.site.siteMetadata;
  return (
    <VerticalLayout>
      <Helmet title={`${nickname}'s blog`}/>
      <ContentLayout>
        <div className={!theme ? style.notFound : style.notFoundDark}>
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </ContentLayout>
      <Footer data={data}/>
    </VerticalLayout>
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
        blog
      }
    }
  }
`;

export default NotFoundPage;