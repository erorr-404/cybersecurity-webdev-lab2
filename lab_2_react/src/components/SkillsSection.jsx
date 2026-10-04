
import SkillSectionCell from "./SkillSectionCell";

function SkillsSection() {
    return (
        <section className="mb-12 border-t border-[#304875] pt-8">
            <h3 className="mb-5 text-2xl font-bold text-[#d3a45f]">Технічні навички</h3>
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
        </section>
    )
}

export default SkillsSection;