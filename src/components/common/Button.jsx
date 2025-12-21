export default function Button({ children, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-violet-600 hover:bg-violet-500"
      : "border border-slate-700 hover:bg-slate-900";

  return (
    <span
      className={`inline-block rounded-xl px-6 py-3 font-medium ${styles}`}
    >
      {children}
    </span>
  );
}
