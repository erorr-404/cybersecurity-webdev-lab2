import SkillSectionCell from "../SkillSectionCell";
import { Heading3 } from "../Headings";
import { Section } from "../Section";

function SkillsSection() {
  return (
    <Section>
      <Heading3>Технічні навички</Heading3>
      <ul className="grid gap-3 sm:grid-cols-2">
        <SkillSectionCell
          header="Мови"
          skills={["C#", "C/C++", "Python", "JavaScript", "Rust"]}
        />
        <SkillSectionCell
          header="Фреймворки"
          skills={["Unity", "Flask", "FastAPI", "Django", "Arduino", "React"]}
        />
        <SkillSectionCell
          header="Пристрої"
          skills={["ESP32", "Raspberry Pi", "Arduino"]}
        />
        <SkillSectionCell header="Інше" skills={["Linux"]} />
      </ul>
    </Section>
  );
}

export default SkillsSection;
