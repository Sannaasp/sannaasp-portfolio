import * as React from "react";
import Layout from "../components/Layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Card } from "../components/Card";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { getImage } from "gatsby-plugin-image";
import { navLinks } from "../styles/layout.module.css";
// import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/index.css";
// eslint-disable-next-line no-empty-pattern
const IndexPage = ({}) => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulProjekt {
        nodes {
          id
          title
          slug
          descriptions {
            descriptions
          }
          image {
            gatsbyImageData
          }
        }
      }
      contentfulHeader {
        headerTitle
        headerImg {
          file {
            url
          }
        }

        headerDescription {
          headerDescription
        }
      }

      allContentfulSkills {
        nodes {
          slug
          skillsTitle
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

      allContentfulWork {
        nodes {
          slug
          title
        }
      }
    }
  `);

  useEffect(() => {
    //AOS.init();
  }, []);

  const projectsToDisplay = data.allContentfulProjekt.nodes.slice(0, 3);

  return (
    <Layout>
      <main>
        <div className="test-box">
          <div /*data-aos="fade-up"*/>
            <Header
              headerTitle={data.contentfulHeader.headerTitle}
              headerImg={data.contentfulHeader.headerImg.gatsbyImageData}
              headerDescription={
                data.contentfulHeader.headerDescription.headerDescription
              }
            />
          </div>

          <div className="projects-title">
            <p
              style={{ color: "#333c2e", fontFamily: "DMS-font" }}
              className="project-title"
            >
              My projects
            </p>{" "}
          </div>
        </div>
        <div className="projects-container">
          {projectsToDisplay.map((Projekt) => {
            const image = getImage(Projekt.image.gatsbyImageData);
            return (
              <div key={Projekt.id}>
                <Link to={Projekt.slug}>
                  <div /*data-aos="fade-up"*/ className="card">
                    <Card
                      limit={3}
                      title={Projekt.title}
                      descriptions={Projekt.descriptions.descriptions}
                      image={image}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="projects-button">
          <a
            href="/#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            style={{
              backgroundColor: "#333c2e",
              hover: {
                backgroundColor: "#yourNewHoverColor",
              },
              marginBottom: "50px",
            }}
          >
            <Link to="/allprojects" className={navLinks}>
              See all projects
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </a>
        </div>
        <div className="skills-container">
          <div className="projects-title">
            {/* <header className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white projects-title"> */}
            <p
              style={{ color: "#eeece2", fontFamily: "DMS-font" }}
              className="project-title"
            >
              Skills & Experiences
            </p>
            {/* </header> */}
          </div>

          <div className="experiences-container">
            <div className="text-column">
              <p
                style={{ fontSize: "40px", color: "#eeece2" }}
                className="font-semibold"
              >
                Skills
              </p>
              <div className="flex justify-center">
                <ul
                  className="flex justify-center flex-col custom-ul space-y-2"
                  style={{
                    color: "#eeece2",
                    listStyleType: "disc",
                    lineHeight: "2.5",
                    width: "300px",
                  }}
                >
                  {data.allContentfulSkills.nodes.slice(0, 3).map((skill) => (
                    <li key={skill.slug}>{skill.skillsTitle}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-column">
              <p
                style={{
                  fontSize: "40px",
                  color: "#eeece2",
                }}
                className="font-semibold"
              >
                Education
              </p>
              <div>
                <ul
                  className="custom-ul space-y-2"
                  style={{
                    color: "#eeece2",
                    listStyleType: "disc",
                    lineHeight: "2.5",
                  }}
                >
                  {data.allContentfulEducation.nodes
                    .slice(0, 3)
                    .map((education) => (
                      <li key={education.slug}>{education.title}</li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="text-column">
              <p
                style={{
                  fontSize: "40px",
                  color: "#eeece2",
                }}
                className="font-semibold"
              >
                Work
              </p>
              <div>
                <ul
                  className="custom-ul space-y-2"
                  style={{
                    color: "#eeece2",
                    listStyleType: "disc",
                    lineHeight: "2.5",
                  }}
                >
                  {data.allContentfulWork.nodes.slice(0, 3).map((work) => (
                    <li key={work.slug}>{work.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="projects-button">
            <a
              href="/#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              style={{
                backgroundColor: "#eeece2",
                color: "#333c2e",
                hover: {
                  backgroundColor: "#yourNewHoverColor",
                },
              }}
            >
              <Link to="/about" className={navLinks}>
                All experiences
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
