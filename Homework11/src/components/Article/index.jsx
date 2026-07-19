import styles from "./styles.module.css";
import { useParams, useNavigate } from "react-router-dom";

function Article({ posts }) {
  const { id } = useParams();
  const navi = useNavigate();

  const post = posts.find((post) => post.id === Number(id));

  return (
    <div  className={styles.block}>
      <div>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
      </div>
      <button onClick={() => navi("/list")} className={styles.btn} >Назад</button>
    </div>
  );
}
export default Article;
