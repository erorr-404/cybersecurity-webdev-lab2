import { Contact } from "./Contact";

function MainInfoSection() {
  return (
    <section className="mb-12">
      <h2 className="mb-3 text-3xl font-bold text-[#d3a45f] sm:text-4xl">Голуб Максим</h2>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#82a0d1]">
        Unity Developer / Full-Stack / Hardware & IoT інженер
      </h3>
      <p className="mb-7 max-w-3xl text-base leading-7 text-slate-300">
        Розробник з інтересом до створення ігор та роботи із мікроконтролерами. Вмію робити веб-сайти, 2D ігри та невеличкі IoT пристрої.
      </p>
      <Contact name="E-mail:" text="maksym.holub.kb.2025@lpnu.ua" url="mailto:maksym.holub.kb.2025@lpnu.ua" />

      <Contact name="GitHub:" text="erorr-404" url="https://github.com/erorr-404" />
    </section>
  );
}

export default MainInfoSection;
