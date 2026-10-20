import { Link } from "./Link";

export function Contact({name, text, url}) {
  return (
    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
      <p className="w-16 text-sm font-bold text-muted">{name}</p>
      <Link href={url} text={text}/>
    </div>
  )
}