import { Link } from "./Link";

function ProjectsSectionCell({ title, links = [], images = [] }) {
  return (
    <li className="border-b border-divider pb-6 last:border-b-0">
      <h4 className="mb-4 text-base leading-6 text-body">{title}</h4>

      {images.length > 0 && (
        <div className="mb-4 w-full min-w-0 max-w-full overflow-x-auto pb-1 [scrollbar-color:var(--color-line)_var(--color-card)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-card [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-line [&::-webkit-scrollbar-thumb:hover]:bg-accent">
          <div className="flex w-max min-w-full flex-nowrap gap-3 justify-center-safe">
            {images.map(({ src, alt }) => (
              <img
                key={src}
                className="h-[280px] w-auto max-w-none flex-none rounded-lg border border-divider object-cover"
                src={src}
                alt={alt}
              />
            ))}
          </div>
        </div>
      )}

      {links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {links.map(({ href, text }) => (
            <Link key={href} href={href} text={text} />
          ))}
        </div>
      )}
    </li>
  );
}

export default ProjectsSectionCell;
