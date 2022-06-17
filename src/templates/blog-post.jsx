import React, { useContext } from "react";
import { Link, graphql } from "gatsby";
import { ThemeContext } from "contexts/theme";
import * as style from "assets/styles/pages/blog-post.module.scss";
import Toc from "components/toc";
import Utterances from "components/Utterances";
import get from "lodash/get";
import PostItem from "components/post-item";
import ContentLayout from "layouts/content-layout";
import { Helmet } from "react-helmet-async";
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
  // dark mode
  const { theme } = useContext(ThemeContext);
  // create title tag id
  const titleId = markdownRemark.id.replaceAll(/[0-9\-]/g, '');
  return (
    <section className={!theme ? style.post : style.postDark}>
      <Helmet title={markdownRemark.frontmatter.title}/>
      <aside className={style.aside}>
        <div className={style.postToc}>
          <Toc
            html={post.tableOfContents}
            title={markdownRemark.frontmatter.title}
            titleId={titleId}
          />
        </div>
      </aside>
      <article className={style.article}>
        <ContentLayout data={data}>
          <div className={style.postWrap}>
            <div className={style.postHead}>
              <h1 id={titleId}>{markdownRemark.frontmatter.title}</h1>
              <i>{`Posted on ${markdownRemark.frontmatter.date}`}</i>
              <ul className={style.postTags}>
                {markdownRemark.frontmatter.tags.map((el, idx) => (
                  <li key={idx}>
                    { el &&
                      <Link to={`/?tag=${encodeURI(el)}`}>
                        {`#${el}`}
                      </Link>
                    }
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={style.postBody}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          { (_repo && _theme) &&
            <div className={style.postComment}>
              <h1>Comments</h1>
              <Utterances
                repo={_repo}
                theme={_theme}
              />
            </div>
          }
          { (prevNode || nextNode) &&
            <div className={style.postFooter}>
              <h1>
                Other Posts
                <span>{tag ? ` - #${tag}` : ' - All'}</span>
              </h1>
              <ul>
                { prevNode &&
                  <li>
                    <PostItem tag={tag} node={prevNode}/>
                  </li>
                }
                { nextNode &&
                  <li>
                    <PostItem tag={tag} node={nextNode}/>
                  </li>
                }
              </ul>
            </div>
          }
        </ContentLayout>
      </article>
    </section>
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