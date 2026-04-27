type LogoutConfirmModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

export function LogoutConfirmModal({ onCancel, onConfirm }: LogoutConfirmModalProps) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/20 px-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="logout-title"
    >
      <div className="relative w-full max-w-[420px] border border-black/20 bg-white px-8 py-10 sm:max-w-[480px] sm:px-12">
        <button
          aria-label="Close logout confirmation"
          className="absolute right-6 top-5 text-2xl font-light leading-none text-black/45 hover:text-black"
          onClick={onCancel}
          type="button"
        >
          ×
        </button>
        <h2
          className="pr-8 font-serif text-[20px] font-semibold uppercase leading-[1.25] tracking-[0.15em] text-black"
          id="logout-title"
        >
          Log Out Of Your Account?
        </h2>
        <p className="mt-8 text-sm leading-6 text-black/55">
          Are you sure you want to log out? You&apos;ll need to sign in again to access your account information.
        </p>
        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          <button
            className="h-[42px] border border-black bg-white px-7 text-[10px] font-medium uppercase tracking-[0.15em] text-black transition hover:bg-black hover:text-white"
            onClick={onCancel}
            type="button"
          >
            Cancel
          </button>
          <button
            className="h-[42px] border border-black bg-black px-7 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-black"
            onClick={onConfirm}
            type="button"
          >
            Yes, Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
