
import tankv2_1 from '../assets/tankv2_1.jpg';
import tankv2_2 from '../assets/tankv2_2.jpg';
import crab2_1 from '../assets/crab2_1.jpg';
import crab2_2 from '../assets/crab2_2.jpg';
import hackathon1 from '../assets/hackathon1.png';
import rada_1 from '../assets/rada_1.png';
import rada_2 from '../assets/rada_2.png';
import timetable_1 from '../assets/timetable_1.png';
import timetable_2 from '../assets/timetable_2.png';
import timetable_3 from '../assets/timetable_3.png';
import ProjectsSectionCell from './ProjectsSectionCell';

function ProjectsSection() {
    return (
        <section className="mb-12 border-t border-[#304875] pt-8">
            <h3 className="mb-5 text-2xl font-bold text-[#d3a45f]">Проєкти</h3>
            <ul className="space-y-6">
                <ProjectsSectionCell
                    title="Емулятор файлової системи CLI в оперативній пам’яті, написаний на мові Rust"
                    links={[{ href: "https://github.com/erorr-404/rust-ram-fs", text: "GitHub" }]}
                />
                <ProjectsSectionCell
                    title="Система аналізу телеметрії та 3D-візуалізації польотів БПЛА для хакатону BEST-HACKath0n-2026"
                    images={[{ src: hackathon1, alt: "Screenshot of the UAV telemetry project" }]}
                    links={[{ href: "https://github.com/erorr-404/Larp-Team-BEST-HACKath0n", text: "GitHub" }]}
                />
                <ProjectsSectionCell
                    title="Наземний гусеничний дрон «TankV2»"
                    images={[
                        { src: tankv2_1, alt: "TankV2" },
                        { src: tankv2_2, alt: "TankV2" },
                    ]}
                />
                <ProjectsSectionCell
                    title="Наземний дрон з камерою «Crab-2»"
                    images={[
                        { src: crab2_1, alt: "Crab-2" },
                        { src: crab2_2, alt: "Crab-2" },
                    ]}
                />
                <ProjectsSectionCell
                    title="Телеграм-бот, який використовує Ollama для спілкування з користувачами у Telegram."
                    links={[{ href: "https://github.com/erorr-404/SmartTelegramBot", text: "GitHub" }]}
                />
                <ProjectsSectionCell
                    title="Веб-сайт для перегляду розкладу уроків"
                    images={[
                        { src: timetable_1, alt: "Timetable website" },
                        { src: timetable_2, alt: "Timetable website" },
                        { src: timetable_3, alt: "Timetable website" },
                    ]}
                    links={[
                        { href: "https://erorr-404.github.io/timetable", text: "Веб-сайт" },
                        { href: "https://github.com/erorr-404/timetable", text: "GitHub" },
                    ]}
                />
                <ProjectsSectionCell
                    title="Сайт ради президента ліцею №4 м. Вінниця"
                    images={[
                        { src: rada_1, alt: "Website of the lyceum president council" },
                        { src: rada_2, alt: "Website of the lyceum president council" },
                    ]}
                    links={[
                        { href: "https://erorr-404.github.io/rada-presentation/", text: "Веб-сайт" },
                        { href: "https://github.com/erorr-404/rada-presentation", text: "GitHub" },
                    ]}
                />
            </ul>
        </section>
    )
}

export default ProjectsSection;