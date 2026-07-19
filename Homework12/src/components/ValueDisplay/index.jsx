import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";

function ValueDisplay() {
  const [value, setValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const prev = useRef("");
  useEffect(() => {
    prev.current = value;
  }, [value]);
  function handleSubmit(e) {
    e.preventDefault();
    setPrevValue(value);
    setValue("");
  }
  return (
    <div className={styles.block}>
      <h1>Current and Previos Value</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p>Current Value: {value}</p>
      <p>Previos Value: {prevValue}</p>
    </div>
  );
}

export default ValueDisplay;
