import React, { useContext } from "react";
import { Link, graphql } from "gatsby";
import { ThemeContext } from "contexts/theme";
import Footer from "components/footer";
import Intro from "components/intro";
import Down from "assets/img/down.svg";
import ContentLayout from "layouts/content-layout";
import VerticalLayout from "layouts/vertical-layout";
import * as style from "assets/styles/pages/about.module.scss";
import { Helmet } from "react-helmet-async";

const About = ({ data }) => {
  // dark mode
  const { theme } = useContext(ThemeContext);
  // for title
  const { nickname } = data.site.siteMetadata;
  return (
    <div className={!theme ? style.about : style.aboutDark}>
      <Helmet title={`${nickname}'s blog`}/>
      <VerticalLayout>
        <ContentLayout>
          <Intro data={data}/>
          <div className={style.gotoPortfolio}>
            <Link to='/portfolio'>
              show more
              <Down />
            </Link>
          </div>
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
        github
        instagram
        gmail
        blog
      }
    }
  }
`;

export default About;