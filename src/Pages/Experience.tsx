import { workExperience } from "../assets/Data/workExperience";

import "../styles/scss-style/TimeLine.scss";
const ExperienceList = () => {
  let workExperiences = workExperience.workExperience;

  return (
    <>
      <div className="timeline">
        {workExperiences
          .filter((_, index) => index !== 1)
          .map((entry, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="timeline-title">{entry.title}</h3>
                <p className="timeline-role">
                  {entry.company.role} | {entry.company.name}| Aug 2023 –
                  Present
                </p>
                <p className="timeline-summary">
                  I have contributed to three live projects, gaining hands-on
                  experience in building and delivering production-ready
                  solutions. At Mettler Health Care, I worked with the frontend
                  team to implement the patient–doctor conversation feature,
                  dynamic form creation, and integrated OpenAI to automatically
                  populate form data from conversations — eliminating the need
                  for manual data entry. I am now expanding my role to
                  contribute to both frontend and backend development.
                </p>
                <ul className="timeline-points">
                  <li>
                    Developed a full-stack hospital management system using
                    React.js and Java Spring Boot.
                  </li>
                  <li>
                    Integrated OpenAI's speech-to-text for a dynamic form
                    builder, enhancing user efficiency.
                  </li>
                  <li>
                    Implemented custom FHIR-compliant APIs aligned with HL7
                    standards to enable seamless
                    <br />
                    healthcare data interoperability and integration.
                  </li>
                  <li>
                    Used Redux Toolkit and React Hooks for efficient state
                    management.
                  </li>
                  <li>
                    Designed and documented RESTful APIs with Swagger and
                    handled secure routing via React Router.
                  </li>
                  <li>
                    Enhanced performance with code splitting and lazy loading to
                    reduce initial bundle size.
                  </li>
                  <li>
                    Developed CRUD operations for custom resources following the
                    FHIR (Fast HealthcareInteroperability Resources) standard
                    using Java Spring Boot.
                  </li>
                  <li>
                    Managed shared app state using React Context API for cleaner
                    and scalable architecture.
                  </li>
                  <li>
                    Used Azure Git for version control, code collaboration, and
                    CI/CD integrations.
                  </li>
                  <li>
                    Implemented profile image upload in Java Spring Boot using
                    MultipartFile and served images via RESTful URL endpoints.
                  </li>
                  <li>
                    Developed a responsive dashboard using CSS Grid and Flexbox
                    to display user details.
                  </li>
                  <li>
                    Configured Redux for global state management across the
                    application.
                  </li>
                  <li>
                    Implemented lazy loading to optimize performance and improve
                    load times.
                  </li>
                  <li>Removed inline CSS for maintainable styling.</li>
                  <li>
                    Performed API integration, debugging, and UI enhancements
                    for better user experience.
                  </li>
                </ul>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ExperienceList;
