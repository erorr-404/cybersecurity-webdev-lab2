import Header from "./components/Header";
import EducationSection from "./components/EducationSection";
import MainInfoSection from "./components/MainInfoSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <MainInfoSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <EducationSection/>
      </main>
    </div>
  )
}

export default App;