import { Heading4, SmallSubheading } from "./Headings";

export function Comment({ heading, subheading, children }) {
  return (
    <div className="mb-3 pb-3 border-b border-border">
      <Heading4>{heading}</Heading4>
      <SmallSubheading>{subheading}</SmallSubheading>
      <p className="text-sm mt-1">{children}</p>
    </div>
  );
}
