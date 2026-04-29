import styles from "./account.module.css";

export function WishlistPanel() {
  return (
    <section className={styles.emptyPanel}>
      <h2>Wishlist</h2>
      <p>Your saved items will appear here.</p>
    </section>
  );
}
