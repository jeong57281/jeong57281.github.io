import React, { useContext } from "react";
import { Link, graphql } from "gatsby";
import { ThemeContext } from "contexts/theme";
import * as style from "assets/styles/pages/blog-post.module.scss";
import Toc from "components/toc";
import Footer from "components/footer";
import Utterances from "components/Utterances";
import get from "lodash/get";
import SideLayout from "layouts/side-layout";
import ContentLayout from "layouts/content-layout";
import VerticalLayout from "layouts/vertical-layout";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const BlogPost = ({ location, data }) => {
  // utterances
  const _repo = get(data, 'site.siteMetadata.utterances.repo', false);
  const _theme = get(data, 'site.siteMetadata.utterances.theme', false);
  // parse query string
  const params = new URLSearchParams(location.search);
  const tag = params.get('tag') || '';
  // other post
  const { markdownRemark, allMarkdownRemark } = data;
  const { nodes } = allMarkdownRemark;
  const post = markdownRemark;
  const postDataList = !tag ? nodes : nodes.filter(node => node.frontmatter.tags.includes(tag));
  const postIndex = postDataList.findIndex(postData => postData.id === markdownRemark.id);
  const prevNode = postIndex > 0 ? postDataList[postIndex-1] : undefined;
  const nextNode = postIndex  < postDataList.length-1 ? postDataList[postIndex+1] : undefined;
  const PrevPost = () => {
    if(!prevNode) return <></>;
    const { excerpt } = prevNode;
    const { title, titleImage, date } = prevNode.frontmatter;
    const { slug } = prevNode.fields;
    return (
      <li>
        <Link to={!tag ? slug : `${slug}?tag=${encodeURI(tag)}`}>
          <div className={style.postImage}>
            <div className={style.ratio}>
              <img src={titleImage}/>
            </div>
          </div>
          <div className={style.postInfo}>
            <h2>{`${title}`}</h2>
            <i>{`Posted on ${date}`}</i>
            <p>{excerpt}</p>
          </div>
        </Link>
      </li>
    );
  };
  const NextPost = () => {
    if(!nextNode) return <></>;
    const { excerpt } = nextNode;
    const { title, titleImage, date } = nextNode.frontmatter;
    const { slug } = nextNode.fields;
    return (
      <li>
        <Link to={!tag ? slug : `${slug}?tag=${encodeURI(tag)}`}>
          <div className={style.postImage}>
            <div className={style.ratio}>
              <img src={titleImage}/>
            </div>
          </div>
          <div className={style.postInfo}>
            <h2>{`${title}`}</h2>
            <i>{`Posted on ${date}`}</i>
            <p>{excerpt}</p>
          </div>
        </Link>
      </li>
    );
  };
  // dark mode
  const { theme } = useContext(ThemeContext);
  // create title tag id
  const titleId = markdownRemark.id.replaceAll(/[0-9\-]/g, '');
  return (
    <div className={!theme ? style.post : style.postDark}>
      <SideLayout
        aside={
          <aside className={style.postToc}>
            <Toc
              html={post.tableOfContents}
              title={markdownRemark.frontmatter.title}
              titleId={titleId}
            />
          </aside>
        }
        section={
          <VerticalLayout>
            <ContentLayout>
              <div className={style.postWrap}>
                <div className={style.postHead}>
                  <h1 id={titleId}>{markdownRemark.frontmatter.title}</h1>
                  <i>{`Posted on ${markdownRemark.frontmatter.date}`}</i>
                  <ul className={style.postTags}>
                    {markdownRemark.frontmatter.tags.map((el, idx) => (
                      <li key={idx}>
                        { el &&
                          <Link to={`/?tag=${encodeURI(el)}`}>{`#${el}`}</Link>
                        }
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={style.postBody}
                  dangerouslySetInnerHTML={{ __html: post.html }}
                >
                </div>
              </div>
            { (_repo && _theme) &&
              <div className={style.postComment}>
                <Utterances
                  repo={_repo}
                  theme={_theme}
                />
              </div>
            }
            </ContentLayout>
            { (prevNode || nextNode) &&
              <div className={style.postFooterWrap}>
                <div className={style.postFooter}>
                  <ul>
                    <PrevPost/>
                    <NextPost/>
                  </ul>
                </div>
              </div>
            }
            <Footer data={data}/>
          </VerticalLayout>
        }
      />
    </div>
  );
}

export const query = graphql`
  query ($slug: String!){
    site {
      siteMetadata {
        nickname
        github
        instagram
        gmail
        blog
        utterances {
          repo
          theme
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        date
        tags
      }
      fields {
        slug
      }
      id
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          tags
          date
          titleImage
        }
        excerpt
        id
      }
    }
  }
`;

export default BlogPost;