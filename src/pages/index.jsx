import React, { useContext } from "react";
import { Link, graphql } from "gatsby";
import { ThemeContext } from "contexts/theme";
import * as style from "assets/styles/pages/index.module.scss";
import ContentLayout from "layouts/content-layout";
import PostItem from "components/post-item";
import { Helmet } from "react-helmet";

const Index = ({ location, data }) => {
  // get markdown data
  const { group, nodes } = data.allMarkdownRemark;
  // parse query string
  const params = new URLSearchParams(location.search);
  const tag = params.get('tag') || '';
  // scroll top func
  const scrollTop = () => {
    const scroll = document.querySelector('#scroll');
    if(scroll) scroll.scrollTo(0, 0);
  }
  // pagination
  const POST_PER_PAGE = data.site.siteMetadata.postPerPage;
  let posts = !tag ? nodes : nodes.filter(node => node.frontmatter.tags.includes(tag));
  let page = 1;
  const curPage = parseInt(params.get('page'));
  const maxPage = Math.ceil(posts.length/POST_PER_PAGE);
  if(1 <= curPage && curPage <= maxPage) page = curPage;
  const MPagination = () => {
    return (
      <div className={style.mPagination}>
        <button className={page === 1 ? style.disabled : ''}>
          <Link
            to={`/?${tag ? `tag=${encodeURI(tag)}&` : ''}page=${page-1}`}
            onClick={scrollTop}
          >
            prev
          </Link>
        </button>
        <button className={page === maxPage ? style.disabled : ''}>
          <Link
            to={`/?${tag ? `tag=${encodeURI(tag)}&` : ''}page=${page+1}`}
            onClick={scrollTop}
          >
            next 
          </Link>
        </button>
      </div>
    );
  }
  const Pagination = () => {
    const around = [];
    if(1 <= page-2) around.push(page-2);
    if(1 <= page-1) around.push(page-1);
    around.push(page);
    if(page+1 <= maxPage) around.push(page+1);
    if(page+2 <= maxPage) around.push(page+2);
    return (
      <div className={style.pagination}>
        <ul>
          { !around.includes(1) &&
            <>
              <li>
                <Link
                  to={!tag ? `/?page=${1}` : `/?tag=${encodeURI(tag)}&page=${1}`}
                  className={1 === page ? style.active : ''}
                  onClick={scrollTop}
                >
                  1
                </Link>
              </li>
              { around[0] !== 2 &&
                <li>
                  <p>...</p>
                </li>
              }
            </>
          }
          {around.map((el, idx) => (
            <li key={idx}>
              <Link
                to={!tag ? `/?page=${el}` : `/?tag=${encodeURI(tag)}&page=${el}`}
                className={el === page ? style.active : ''}
                onClick={scrollTop}
              >
                {el}
              </Link>
            </li>
          ))}
          { (maxPage && !around.includes(maxPage)) &&
            <>
              { around[around.length-1] !== maxPage-1 &&
                <li>
                  <p>...</p>
                </li>
              }
              <li>
                <Link
                  to={!tag ? `/?page=${maxPage}` : `/?tag=${encodeURI(tag)}&page=${maxPage}`}
                  className={maxPage === page ? style.active : ''}
                  onClick={scrollTop}
                >
                  {maxPage}
                </Link>
              </li>
            </>
          }
        </ul>
      </div>
    );
  }
  posts = posts.slice((page-1)*POST_PER_PAGE, page*POST_PER_PAGE);
  // dark mode
  const { theme } = useContext(ThemeContext);
  // for title
  const { nickname } = data.site.siteMetadata;
  return (
    <section className={!theme ? style.blog : style.blogDark}>
      <Helmet title={`${nickname}'s blog`}/>
      <aside className={style.aside}>
        <div className={style.tag}>
          <ul className={style.tagList}>
            <li>
              <Link
                to='/'
                className={!tag ? style.active : ''}
                onClick={scrollTop}
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
                      onClick={scrollTop}
                    >
                      {`#${el.tags}`}
                    </Link>
                  }
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <article className={style.article}>
        <ContentLayout data={data}>
          <ul className={style.postList}>
            {posts.map((node, idx) => {
              return (
                <li key={idx}>
                  <PostItem tag={tag} node={node}/>
                </li>
              );
            })}
          </ul>
          <Pagination/>
          <MPagination/>
        </ContentLayout>
      </article>
    </section>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        nickname
        postPerPage
        github
        instagram
        gmail
        tistory
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___tags) {
        tags: fieldValue
        totalCount
      }
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          titleImage
          tags
        }
      }
    }
  }
`;

export default Index;