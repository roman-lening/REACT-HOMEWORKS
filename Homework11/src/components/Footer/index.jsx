import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const fL = [
  {
    id: 1,
    title: "О нас",
    to: "/about",
  },
  {
    id: 2,
    title: "Контакты",
    to: "/contacts",
  },
  {
    id: 3,
    title: "Связь",
    to: "/connetction",
  },
];

function Footer() {
  return (
    <footer className={styles.block}>
      {fL.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.to}
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            {link.title}
          </NavLink>
        );
      })}
    </footer>
  );
}
export default Footer;
