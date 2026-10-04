function SkillSectionCell({ header, skills }) {
	return (
		<li className="rounded-lg border border-[#304875] bg-[#1d315d] px-4 py-3">
			<h4 className="mb-1 font-semibold text-[#d3a45f]">{header}</h4>
			<ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-300 flex flex-row flex-wrap">
				{skills.map((skill) => (
					<li className="mr-10" key={skill}>{skill}</li>
				))}
			</ul>
		</li>
	)
}

export default SkillSectionCell;
