import React, { useContext } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "contexts/theme";
import * as style from "assets/styles/components/post-item.module.scss";

const PostItem = ({ tag, node }) => {
  const { titleImage, title, date } = node.frontmatter;
  const slug = node.fields.slug;
  const excerpt = node.excerpt;
  // dark mode
  const { theme } = useContext(ThemeContext);
  return (
    <Link
      className={!theme ? style.postItem : style.postItemDark}
      to={!tag ? slug : `${slug}?tag=${encodeURI(tag)}`}
    >
      <div className={style.image}>
        <div className={style.ratio}>
          <img src={titleImage}/>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.text}>
          <h2>{title}</h2>
          <i>{`Posted on ${date}`}</i>
          <p>{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}

export default PostItem;