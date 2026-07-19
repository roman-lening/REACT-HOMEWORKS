import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const navi = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "List",
    to: "/list",
  },
  {
    id: 3,
    title: "Article",
    to: "/article",
  },
];

function Nav() {
  return (
    <div className={styles.block}>
      {navi.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.to}
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
              };
            }}
          >
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
}
export default Nav;
