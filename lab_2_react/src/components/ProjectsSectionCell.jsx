import { Link } from "./Link";

function ProjectsSectionCell({ title, links = [], images = [] }) {
  return (
    <li className="border-b border-[#45628f] pb-6 last:border-b-0">
      <h4 className="mb-4 text-base leading-6 text-slate-200">{title}</h4>

      {images.length > 0 && (
        <div className="mb-4 w-full min-w-0 max-w-full overflow-x-auto pb-1 [scrollbar-color:#5677a8_#1d315d] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#1d315d] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#5677a8] [&::-webkit-scrollbar-thumb:hover]:bg-[#d3a45f]">
          <div className="flex w-max min-w-full flex-nowrap gap-3 justify-center-safe">
            {images.map(({ src, alt }) => (
              <img
                key={src}
                className="h-[280px] w-auto max-w-none flex-none rounded-lg border border-[#45628f] object-cover"
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
