import { useState } from "react";
import styles from "./styles.module.css";

function ChangeLanguage() {
  const [english, setEnglish] = useState(true);

  function handleChange() {
    setEnglish(!english);
  }

  return (
    <div className={styles.block}>
      {english ? (
        <p className={styles.p}>English language was chosen</p>
      ) : (
        <p className={styles.p}>Выбран русский язык</p>
      )}
      <button onClick={handleChange} className={styles.btn}>
        Switch language
      </button>
    </div>
  );
}

export default ChangeLanguage;
