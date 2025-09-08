import dataskill from "../Assets/Data/Dataskills.json";
import "../styles/Skills.css";
import "../styles/Card.css";
function Skills() {
  const Dataskill = dataskill;
  return (
    <>
      <ul className="skills-card-list">
        {Dataskill.map((skill, index) => (
          <li key={index} className="skills-card">
            <img
              src={skill.img}
              alt={skill.title}
              className="skills-card-image"
            />
            <h3 className="skills-card-title">{skill.title}</h3>
            <p className="skills-card-description">{skill.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
