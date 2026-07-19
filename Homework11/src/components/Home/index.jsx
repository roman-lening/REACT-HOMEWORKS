import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className={styles.block}>
      <h1>Это главная страница</h1>
      <h2>
        Так называемый <strong>Home</strong>
      </h2>
      <h3>Какая-то информация</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, error
        dolore! A nihil quam fugit praesentium aliquid, totam aspernatur dolores
        assumenda perspiciatis modi commodi est dignissimos non voluptate labore
        iste, beatae doloribus at sint repellendus culpa quasi quidem neque
        tempore. Culpa possimus dolore laudantium magni nam accusantium velit
        commodi deserunt at neque amet et cumque minus quidem, quae, natus
        expedita laborum. Eos corporis error amet unde beatae modi dolorem
        veniam autem perferendis nisi. Incidunt accusamus aspernatur est nihil
        veritatis exercitationem? Aut, molestiae voluptate alias fugiat ratione
        magni quia animi sapiente dolor distinctio ipsum ea molestias ab eaque
        accusamus quae perspiciatis temporibus iusto, sed pariatur tempora minus
        incidunt voluptatibus error. Ex quas eligendi dignissimos similique
        porro et sapiente itaque suscipit tempora, fugiat expedita debitis nemo
        assumenda? Magnam tempora quaerat il.
      </p>
      <h3>
        Хотите почитать{" "}
        <NavLink to="/list" style={{ color: "goldenrod" }}>
          Статьи
        </NavLink>
        ?
      </h3>
    </div>
  );
}
export default Home;
