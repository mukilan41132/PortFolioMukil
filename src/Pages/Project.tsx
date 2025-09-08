import React from "react";
import "../styles/ProjectShowCase.css";
import productPage from "../Assets/Images/productpage.png";
import PatientOverView from "../Assets/Images/Patient-OverView.png";
const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    type: "Web App",
    description: "A modern dashboard UI for business analytics.",
    image: productPage,
  },
  {
    id: 2,
    title: "Mettler Health Care",
    type: "Web App",
    description: "A modern dashboard UI for Patient OverView.",
    image: PatientOverView,
  },
];
type ProjectShowcaseProps = {
  onProjectClick: any; // temporary, can refine later
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onProjectClick,
}) => {
  return (
    <div className="project-showcase">
      <div className="containerproject">
        <h1 className="title">Project Showcase</h1>
        <div className="projects-grid">
          {[...projects].map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project?.image || ""}
                alt={project?.title || ""}
                className="project-image"
              />
              <div className="project-content">
                <h2
                  className="project-title"
                  onClick={() => onProjectClick(project)}>
                  {project?.title || ""}
                </h2>
                <p className="project-type">{project?.type || ""}</p>
                <p className="project-description">
                  {project?.description || ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
