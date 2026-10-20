import { Heading3 } from "../Headings";
import { Section } from "../Section";

function EducationSection() {
  return (
    <Section>
      <Heading3>Освіта</Heading3>
      <ul className="space-y-3 text-sm leading-6 text-secondary">
        <li className="border-l-2 border-line pl-4">
          Курс «Linux & Network Administration» від компанії PortaOne
        </li>
        <li className="border-l-2 border-line pl-4">
          Спеціальність «Кібербезпека та захист інформації» на кафедрі ІКТА,
          НУЛП (в процесі навчання)
        </li>
        <li className="border-l-2 border-line pl-4">
          Середня освіта з відзнакою у закладі «Вінницький Ліцей №4»
        </li>
      </ul>
    </Section>
  );
}

export default EducationSection;
