type LogoutModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

export function LogoutModal({ onCancel, onConfirm }: LogoutModalProps) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/25 px-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-lg border border-[#111] bg-white p-7 sm:p-9">
        <h2 className="font-serif text-2xl uppercase tracking-editorial">Log Out Of Your Account?</h2>
        <p className="mt-5 text-sm leading-6 text-[#444]">
          Are you sure you want to log out? You&apos;ll need to sign in again to access your account information.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            className="h-12 border border-[#111] bg-[#111] px-5 text-[11px] font-semibold uppercase tracking-editorial text-white transition hover:bg-white hover:text-[#111]"
            onClick={onConfirm}
            type="button"
          >
            Yes, Log Out
          </button>
          <button
            className="h-12 border border-[#111] bg-white px-5 text-[11px] font-semibold uppercase tracking-editorial text-[#111] transition hover:bg-[#111] hover:text-white"
            onClick={onCancel}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
