export function Heading1({ children }) {
  return (
    <h1 className="text-center text-4xl font-bold tracking-tight text-accent sm:text-5xl">
      {children}
    </h1>
  );
}

export function Heading2({ children }) {
  return (
    <h2 className="mb-3 text-3xl font-bold text-accent sm:text-4xl">
      {children}
    </h2>
  );
}

export function Heading3({ children }) {
  return <h3 className="mb-5 text-2xl font-bold text-accent">{children}</h3>;
}

export function Heading4({ children }) {
  return (
    <h4 className="mb-1 text-lg font-medium text-accent">{children}</h4>
  );
}

export function SmallSubheading({ children }) {
  return <small className="text-sx text-muted">{children}</small>;
}
