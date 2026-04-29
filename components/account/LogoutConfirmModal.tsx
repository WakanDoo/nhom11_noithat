"use client";

import styles from "./account.module.css";

type LogoutConfirmModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

export function LogoutConfirmModal({ onCancel, onConfirm }: LogoutConfirmModalProps) {
  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="logout-title">
      <div className={styles.modalBox}>
        <button className={styles.modalClose} onClick={onCancel} type="button" aria-label="Close logout modal">
          ×
        </button>
        <h2 id="logout-title">Log Out Of Your Account?</h2>
        <p>Are you sure you want to log out? You&apos;ll need to sign in again to access your account information.</p>
        <div className={styles.modalActions}>
          <button className={styles.buttonSecondary} onClick={onCancel} type="button">
            Cancel
          </button>
          <button className={styles.buttonPrimary} onClick={onConfirm} type="button">
            Yes, Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
