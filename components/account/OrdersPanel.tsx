import styles from "./account.module.css";

export function OrdersPanel() {
  return (
    <section className={styles.emptyPanel}>
      <h2>Orders</h2>
      <p>Your order history will appear here.</p>
    </section>
  );
}
