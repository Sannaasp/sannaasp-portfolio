import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/skills.css";

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSkills {
        nodes {
          slug
          skillsTitle
        }
      }
    }
  `);

  return (
    <div className="skills-container">
      <ul>
        {data.allContentfulSkills.nodes.map((skill) => (
          <li key={skill.slug}>{skill.skillsTitle}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
