
import tankv2_1 from '../assets/tankv2_1.jpg';
import tankv2_2 from '../assets/tankv2_2.jpg';
import crab2_1 from '../assets/crab2_1.jpg';
import crab2_2 from '../assets/crab2_2.jpg';

function ProjectsSection() {
    const imageHeight = 200;
    return (
        <section>
            <h3>Проєкти</h3>
            <ul>
                <li><a href="https://github.com/erorr-404/rust-ram-fs">Емулятор файлової системи CLI в оперативній пам’яті, написаний на мові Rust</a></li>
                <li>
                    <p>Наземний гусеничний дрон «TankV2»</p>
                    <img src={tankv2_1} height={imageHeight} alt="«TankV2»"/>
                    <img src={tankv2_2} height={imageHeight} alt="«TankV2»"/>
                </li>
                <li>
                    <p>Наземний дрон з камерою «Crab-2»</p>
                    <img src={crab2_1} height={imageHeight} alt="«Crab-2»" />
                    <img src={crab2_2} height={imageHeight} alt="«Crab-2»" />
                </li>
                <li>Телеграм-бот для віддаленого друку</li>
                <li><a href="https://github.com/erorr-404/SmartTelegramBot">Телеграм-бот, який використовує Ollama для спілкування з користувачами у Telegram.</a></li>
                <li><a href="https://erorr-404.github.io/timetable">Веб-сайт</a> для перегляду розкладу уроків (<a href="https://github.com/erorr-404/timetable">Репозиторій</a>)</li>  
                <li><a href="https://erorr-404.github.io/rada-presentation/">Сайт</a> ради президента ліцею №4 м. Вінниця (<a href="https://github.com/erorr-404/rada-presentation">Репозиторій</a>)</li>
            </ul>
        </section>
    )
}

export default ProjectsSection;