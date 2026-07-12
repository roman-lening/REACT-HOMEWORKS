import { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";

function CatImage() {
  const [cat, setCat] = useState(null);
  async function changeCat() {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
      );
      setCat(response.data[0].url);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    changeCat();
  }, []);
  return (
    <div className={styles.block}>
      <img src={cat} alt="cat" className={styles.img} />
      <button onClick={changeCat} className={styles.btn}>
        Change Cat
      </button>
    </div>
  );
}
export default CatImage;
