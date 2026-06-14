import styles from "./Greeting.module.css"
function Greeting({name}) {
  return <h2 className={styles.title}>Привет, {name}!</h2>;
}

export default Greeting;
