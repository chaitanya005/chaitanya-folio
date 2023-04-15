import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typewriter } from "react-simple-typewriter";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      <h2 className="about__role">
        A{" "}
        <Typewriter
          words={["React JS Developer", "Front End Developer"]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          // onLoopDone={handleDone}
          // onType={handleType}
        />
      </h2>

      <p className="about__desc">
        I am a skilled software engineer proficient in web development
        technologies such as <b>React, Node, JavaScript,</b> and <b>HTML/CSS</b>
        . I am passionate about creating <b>intuitive</b> and{" "}
        <b>user-friendly</b> designs that offer exceptional user experiences. As
        a <b>reliable team player</b>, I work collaboratively with others to
        achieve project objectives and meet tight deadlines. With my skills and
        experience, I am confident in my ability to contribute to any team and
        handle any project.,
      </p>

      <div className="about__contact center">
        {resume && (
          <a href={resume} target="_">
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
