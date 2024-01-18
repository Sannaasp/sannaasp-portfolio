import * as React from "react";
import Layout from "../components/Layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Card } from "../components/Card";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "../styles/layout.module.css";

// import { Skills } from "../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/index.css";

const IndexPage = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulProjekt(limit: 5) {
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

      contentfulContact {
        phone
        mail
        linkedin
      }
      allContentfulSkills {
        nodes {
          slug
          skillsTitle
        }
      }
    }
  `);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <main>
        <div className="test-box">
          <div data-aos="fade-up">
            <Header
              headerTitle={data.contentfulHeader.headerTitle}
              headerImg={data.contentfulHeader.headerImg.gatsbyImageData}
              headerDescription={
                data.contentfulHeader.headerDescription.headerDescription
              }
            />
          </div>

          {/*
          <Skills skills={data.allContentfulSkills.nodes} /> */}

          <div className="projects-title">
            {/* <header
              className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white projects-title test-title"
              style={{ transition: "opacity 2s ease-in-out" }}
            > */}
            <p style={{ color: "#333c2e" }} className="project-title">
              My projects
            </p>{" "}
            {/* </header> */}
          </div>
        </div>
        <div className="projects-container">
          {data.allContentfulProjekt.nodes.map((Projekt) => {
            const image = getImage(Projekt.image.gatsbyImageData);
            return (
              <div key={Projekt.id}>
                <Link to={Projekt.slug}>
                  <div data-aos="fade-up" className="card">
                    <Card
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
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            style={{
              backgroundColor: "#333c2e", // Replace with your desired color
              hover: {
                backgroundColor: "#yourNewHoverColor", // Replace with your desired hover color
              },
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
            <p style={{ color: "#eeece2" }} className="project-title">
              Skills & Experiences
            </p>
            {/* </header> */}
          </div>
          <div className="skills-text-container">
            <div className="flex justify-between">
              {/* Ta bort ul här */}
              <div className="w-1/2 pr-4">
                <p style={{ color: "#eeece2" }} className="font-semibold">
                  Skills
                </p>
                <ul style={{ color: "#eeece2" }}>
                  {data.allContentfulSkills.nodes.slice(0, 3).map((skill) => (
                    <li key={skill.slug} className="text-xl">
                      {skill.skillsTitle}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/2 pl-4">
                <p style={{ color: "#eeece2" }} className="font-semibold">
                  Experiences
                </p>
                <ul style={{ color: "#eeece2" }}>
                  {data.allContentfulSkills.nodes.slice(0, 3).map((skill) => (
                    <li key={skill.slug} className="text-xl">
                      {skill.skillsTitle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Contact
        phone={data.contentfulContact.phone}
        mail={data.contentfulContact.mail}
        linkedin={data.contentfulContact.linkedin}
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
