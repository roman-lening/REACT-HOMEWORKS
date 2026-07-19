import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";



function ListArticle({posts}) {
  return (
    <div className={styles.block}>
      <h2>Наши статьи:</h2>
      {posts.map((post) => {
        return (
          <NavLink key={post.id} to={`/article/${post.id}`}>
            {post.title}
          </NavLink>
        );
      })}
    </div>
  );
}
export default ListArticle;
