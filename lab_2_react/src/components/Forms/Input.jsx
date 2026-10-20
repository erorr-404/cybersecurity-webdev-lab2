export function Input({ type, id, name, placeholder, required }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      className="border border-control-border bg-control focus:border-accent outline-0 rounded px-2 py-1"
    />
  );
}
