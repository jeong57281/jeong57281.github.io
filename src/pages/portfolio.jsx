import React, { useContext } from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "contexts/theme";
import Footer from "components/footer";
import Intro from "components/intro";
import Duce from "components/duce";
import ContentLayout from "layouts/content-layout";
import VerticalLayout from "layouts/vertical-layout";
import * as style from "assets/styles/pages/portfolio.module.scss";
import { Helmet } from "react-helmet-async";

const Portfolio = ({ data }) => {
  // dark mode
  const { theme } = useContext(ThemeContext);
  // for title
  const { nickname } = data.site.siteMetadata;
  return (
    <div className={!theme ? style.folio : style.folioDark}>
      <Helmet title={`${nickname}'s portfolio`}/>
      <VerticalLayout>
        <ContentLayout>
          <Intro data={data}/>
          <Duce data={data}/>
        </ContentLayout>
        <Footer data={data}/>
      </VerticalLayout>
    </div>
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
        hits
        github
        instagram
        gmail
        blog
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