function SkillSectionCell({ header, skills }) {
  return (
    <li className="rounded-lg border border-border bg-card px-4 py-3">
      <h4 className="mb-1 font-semibold text-accent">{header}</h4>
      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-secondary flex flex-row flex-wrap">
        {skills.map((skill) => (
          <li className="mr-10" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SkillSectionCell;
