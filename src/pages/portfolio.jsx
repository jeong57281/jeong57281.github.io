import React, { useContext } from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "contexts/theme";
import Intro from "components/intro";
import Duce from "components/duce";
import ContentLayout from "layouts/content-layout";
import * as style from "assets/styles/pages/portfolio.module.scss";
import { Helmet } from "react-helmet";

const Portfolio = ({ data }) => {
  // dark mode
  const { theme } = useContext(ThemeContext);
  // for title
  const { nickname } = data.site.siteMetadata;
  return (
    <section className={!theme ? style.folio : style.folioDark}>
      <Helmet title={`${nickname}'s portfolio`}/>
      <ContentLayout data={data}>
        <Intro data={data}/>
        <Duce data={data}/>
      </ContentLayout>
    </section>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
        nickname
        description
        about
        profile
        github
        instagram
        gmail
        tistory
        skills {
          name
          image
        }
        projects {
          image
          links {
            name
            href
          }
          title
          description
        }
        educations {
          name
          description
        }
      }
    }
  }
`;

export default Portfolio;