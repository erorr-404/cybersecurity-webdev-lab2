
export function Link({href, text}) {
    return (
        <a className="max-w-full break-all rounded-md border border-[#5575a8] bg-[#294477] px-3 py-2 text-sm text-[#d5e1f5] transition-colors hover:border-[#d3a45f] hover:bg-[#35568a] hover:text-white" href={href}>{text}</a>
    )
}