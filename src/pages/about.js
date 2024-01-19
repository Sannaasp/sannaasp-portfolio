import * as React from "react";
import Layout from "../components/Layout";
import "../styles/about.css";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutMe {
        aboutTitle
        aboutText {
          aboutText
        }
        aboutImage {
          gatsbyImageData
        }
      }
      allContentfulSkills {
        nodes {
          slug
          skillsTitle
        }
      }
      allContentfulWork {
        nodes {
          title
          description {
            description
          }
          longDescription {
            longDescription
          }
        }
      }
      allContentfulEducation {
        nodes {
          title
          description {
            description
          }
          longDescription {
            longDescription
          }
        }
      }
    }
  `);
  const image = getImage(data.contentfulAboutMe.aboutImage.gatsbyImageData);
  return (
    <main>
      <Layout>
        <div></div>

        <div className="about-flex">
          <div className="about-box">
            <h1 style={{ fontFamily: "DMS-font" }} className="about-title">
              {data.contentfulAboutMe.aboutTitle}
            </h1>

            <div className="about-container">
              <p>{data.contentfulAboutMe.aboutText.aboutText}</p>
            </div>
          </div>
          <div className="about-img">
            <GatsbyImage
              image={image}
              alt="Header Image"
              className="header-img"
            />
          </div>
        </div>
        <div className="about-box-container">
          <div className="skills-box-container">
            <p
              style={{ color: "#333c2e", fontFamily: "DMS-font" }}
              className="about-project-title"
            >
              Skills & Experiences
            </p>
          </div>

          <div className="experiences-container">
            <div className="text-column">
              <p
                style={{
                  fontFamily: "DMS-font",
                  fontSize: "40px",
                  color: "#333c2e",
                }}
              >
                Skills
              </p>

              <ul style={{ color: "#333c2e" }} className="custom-ul space-y-2">
                {data.allContentfulSkills.nodes.map((skill) => (
                  <li key={skill.slug}>{skill.skillsTitle}</li>
                ))}
              </ul>
            </div>

            <div className="text-column">
              <p
                style={{
                  fontFamily: "DMS-font",
                  fontSize: "40px",
                  color: "#333c2e",
                }}
              >
                Work
              </p>

              <ul style={{ color: "#333c2e" }} className="custom-ul space-y-2">
                {data.allContentfulWork.nodes.slice(0, 3).map((work) => (
                  <li key={work.title} className="text-xl">
                    <ul>
                      <li style={{ fontSize: "20px", color: "#333c2e" }}>
                        {work.title}
                        <li style={{ fontSize: "15px", color: "#333c2e" }}>
                          {work.description.description}
                        </li>
                        <li style={{ fontSize: "15px", color: "#333c2e" }}>
                          {work.longDescription.longDescription}
                        </li>
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-column">
              <p
                style={{
                  fontFamily: "DMS-font",
                  fontSize: "40px",
                  color: "#333c2e",
                }}
              >
                Education
              </p>

              <ul style={{ color: "#333c2e" }} className="custom-ul space-y-2">
                {data.allContentfulEducation.nodes
                  .slice(0, 3)
                  .map((education) => (
                    <li key={education.title} className="text-xl">
                      <ul>
                        <li style={{ fontSize: "20px", color: "#333c2e" }}>
                          {education.title}
                        </li>
                        <li style={{ fontSize: "15px", color: "#333c2e" }}>
                          {education.description.description}
                        </li>
                        <li style={{ fontSize: "15px", color: "#333c2e" }}>
                          {education.longDescription.longDescription}
                        </li>
                      </ul>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
