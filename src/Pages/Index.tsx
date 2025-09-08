import { useEffect, useState } from "react";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contactme";
import Experience from "./Experience";

import Home from "./Home";
import ProjectDetails from "./ProjectDetails";
import useTabSwitcher from "../Hooks/useTabSwitcher";
import "../styles/scss-style/style.scss";
import "../styles/App.css";
import ProjectShowcase from "./Project";

const App = () => {
  useTabSwitcher();

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      if (index === activeStep - 1) {
        card.classList.remove("hidden");
        card.classList.add("card--current");
      } else {
        card.classList.add("hidden");
        card.classList.remove("card--current");
      }
    });
  }, [activeStep]);

  const handleNext = () => {
    if (activeStep < 6) setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  return (
    <>
      <div className="background_style">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}>
          <button
            onClick={handlePrev}
            disabled={activeStep === 1}
            className="btn btn-secondary tabs-controls__link">
            ◀ Previous
          </button>

          <button
            onClick={handleNext}
            disabled={activeStep === 6}
            className="btn btn-primary tabs-controls__link">
            Next ▶
          </button>
        </div>
        <div className="section">
          <section className="cards-container">
            <div
              className={`card  ${activeStep === 1 ? "card--current" : ""}`}
              id="1"
              style={{ backgroundColor: "white" }}>
              <Home />
            </div>
            <div
              className={`card papers ${
                activeStep === 2 ? "card--current" : ""
              }`}
              id="2"
              style={{ backgroundColor: "white" }}>
              <About />
            </div>
            <div
              className={`card papers ${
                activeStep === 3 ? "card--current" : ""
              }`}
              id="3"
              style={{ backgroundColor: "white" }}>
              <Skills />
            </div>
            <div
              className={`card papers ${
                activeStep === 4 ? "card--current" : ""
              }`}
              id="4"
              style={{ backgroundColor: "white" }}>
              <Experience />
            </div>
            <div
              className={`card papers ${
                activeStep === 5 ? "card--current" : ""
              }`}
              id="5"
              style={{ backgroundColor: "white" }}>
              {selectedProject ? (
                <ProjectDetails
                  project={selectedProject}
                  onBack={() => setSelectedProject(null)}
                />
              ) : (
                <ProjectShowcase onProjectClick={setSelectedProject} />
              )}
            </div>
            <div
              className={`card papers ${
                activeStep === 6 ? "card--current" : ""
              }`}
              id="6"
              style={{ backgroundColor: "white" }}>
              <Contact />
            </div>
          </section>
        </div>

        {/* Next Button */}
      </div>
    </>
  );
};

export default App;
