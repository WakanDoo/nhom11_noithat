type AuthTab = "signin" | "signup";

type AuthTabsProps = {
  activeTab: AuthTab;
  onChange: (tab: AuthTab) => void;
};

const tabs: Array<{ label: string; value: AuthTab }> = [
  { label: "SIGN IN", value: "signin" },
  { label: "SIGN UP", value: "signup" },
];

export default function AuthTabs({ activeTab, onChange }: AuthTabsProps) {
  return (
    <div className="relative mb-8 grid grid-cols-2 border-b border-black/10 pb-3">
      <div
        className={`absolute bottom-0 h-0.5 w-1/2 bg-[#c9a96e] transition-transform duration-300 ease-out ${
          activeTab === "signin" ? "translate-x-0" : "translate-x-full"
        }`}
      />
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`pb-2 text-sm font-semibold uppercase tracking-[0.3em] transition-colors ${
            activeTab === tab.value ? "text-[#181818]" : "text-[#756b61]"
          }`}
          type="button"
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
