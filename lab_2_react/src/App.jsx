import Header from "./components/Header";
import EducationSection from "./components/Sections/EducationSection";
import MainInfoSection from "./components/Sections/MainInfoSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import SkillsSection from "./components/Sections/SkillsSection";
import { ReviewsSection } from "./components/Sections/ReviewsSection";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";
import { Form } from "./components/Forms/Form";

function App() {
  const [clientData, setClientData] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // get
    const dataToSave = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };

    // save
    localStorage.setItem("client-info", JSON.stringify(dataToSave));

    // load
    const savedData = JSON.parse(localStorage.getItem("client-info"));

    // update
    setClientData(savedData);
  }, []);

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 7 && currentHour < 21) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <div className="min-h-screen bg-page px-4 pt-6 pb-3 text-body sm:px-6 sm:pt-10 sm:pb-5">
      <main className="mx-auto w-full max-w-4xl rounded-2xl border border-border bg-panel px-5 pt-8 shadow-2xl shadow-deep-shadow/40 sm:px-10 sm:pt-12 lg:px-16">
        <button
          onClick={toggleTheme}
          className="rounded-md border border-control-border bg-control px-3 py-2 text-sm text-control-text transition-colors hover:border-accent hover:bg-control-hover absolute"
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>
        <Header />
        <MainInfoSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ReviewsSection />
      </main>
      {clientData && (
        <Footer>
          OS: {clientData.platform} | Browser: {clientData.userAgent}
        </Footer>
      )}
      <Modal heading="Нам важлива ваша думка">
        <Form />
      </Modal>
    </div>
  );
}

export default App;
