import uniqid from "uniqid";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <div className="project__info">
      <div>
        <h3 className="project__name">{project.name}</h3>
        <h5 className="project__name">{project.designation}</h5>
      </div>
      <div>
        <p className="project__duration">{project.duration}</p>
      </div>
    </div>

    {project.description && (
      <ul className="project__description">
        {project.description.map((item) => (
          <li key={uniqid()} className="project__description-item">
            {item}
          </li>
        ))}
      </ul>
    )}
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ProjectContainer;
