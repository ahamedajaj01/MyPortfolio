export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-28">
      <div className="max-w-5xl">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
