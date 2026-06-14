import styles from "./OrderStatus.module.css";
function OrderStatus({ orderId, status }) {
  return (
    <li className={styles.li}>
      Заказ #{orderId}: {status}
    </li>
  );
}
export default OrderStatus;
