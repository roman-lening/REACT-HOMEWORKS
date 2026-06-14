import styles from "./ShoppingList.module.css";
function ShoppingList({ items }) {
  if (items.length === 0) {
    return <p>Список покупок пуст</p>;
  }
  return (
    <ul className={styles.ul}>
      {items.map((item) => (
        <li key={Math.random()} className={styles.li}>{item}</li>
      ))}
    </ul>
  );
}
export default ShoppingList;
