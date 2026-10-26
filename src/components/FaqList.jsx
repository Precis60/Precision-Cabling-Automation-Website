export default function FaqList({ items }) {
  if (!items?.length) return null;

  return (
    <div className="disclosure">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <div className="disclosure-body">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
