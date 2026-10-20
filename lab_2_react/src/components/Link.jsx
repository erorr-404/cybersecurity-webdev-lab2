export function Link({ href, text }) {
  return (
    <a
      className="max-w-full break-all rounded-md border border-control-border bg-control px-3 py-2 text-sm text-control-text transition-colors hover:border-accent hover:bg-control-hover"
      href={href}
    >
      {text}
    </a>
  );
}
