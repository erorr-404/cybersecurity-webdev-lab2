import Header from "./components/Header";
import EducationSection from "./components/EducationSection";
import MainInfoSection from "./components/MainInfoSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="min-h-screen bg-[#111d3d] px-4 py-6 text-slate-200 sm:px-6 sm:py-10">
      <main className="mx-auto w-full max-w-4xl rounded-2xl border border-[#304875] bg-[#19284f] px-5 py-8 shadow-2xl shadow-[#08112b]/40 sm:px-10 sm:py-12 lg:px-16">
        <Header/>
        <MainInfoSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <EducationSection/>
      </main>
    </div>
  )
}

export default App;