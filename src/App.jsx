import React from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SkillDetail from "./pages/SkillDetail";
import ProjectDetail from "./pages/ProjectDetail";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Projects /> {/* 👈 keep here */}
            </>
          }
        />

        {/* PROJECTS PAGE */}
        <Route path="/projects" element={<Projects />} />

        {/* PROJECT DETAIL */}
        <Route path="/projects/:projectId" element={<ProjectDetail />} />

        {/* SKILL DETAIL */}
        <Route path="/skills/:skillId" element={<SkillDetail />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
