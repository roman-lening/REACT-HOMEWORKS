import { useState } from "react";
import styles from "./style.module.css";
function IconHover({ green, blue, title }) {
  const [hover, setHover] = useState(false);
  return (
    <img
      src={hover ? blue : green}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.icon}
      alt={title}
    />
  );
}

export default IconHover;
