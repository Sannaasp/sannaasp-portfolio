import * as React from "react";
import Layout from "../components/Layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Card } from "../components/Card";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
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
            file {
              url
            }
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
              headerImg={data.contentfulHeader.headerImg.file.url}
              headerDescription={
                data.contentfulHeader.headerDescription.headerDescription
              }
            />
          </div>

          {/*
        <Skills skills={data.allContentfulSkills.nodes} /> */}

          <div className="projects-title">
            <header
              className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white projects-title test-title"
              style={{ transition: "opacity 2s ease-in-out" }}
            >
              <p className="project-title">My projects</p>{" "}
            </header>
          </div>
        </div>
        <div className="projects-container">
          {data.allContentfulProjekt.nodes.map((Projekt) => (
            <div key={Projekt.id}>
              <Link to={Projekt.slug}>
                <div data-aos="fade-up" className="card">
                  <Card
                    title={Projekt.title}
                    descriptions={Projekt.descriptions.descriptions}
                    image={Projekt.image.file.url}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/allprojects">
          <p>See all projects</p>
        </Link>
        <div className="skills-container">
          <div className="projects-title">
            <header
              className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white projects-title"
              style={{ transition: "opacity 2s ease-in-out" }}
            >
              <p className="project-title">Skills & Experinces</p>
            </header>
          </div>
          <p>Skills</p>
          <p>Experiences</p>

          <ul className="flex-col items-end space-y-2 text-right">
            {data.allContentfulSkills.nodes.slice(0, 3).map((skill) => (
              <li key={skill.slug} className="underline text-xl">
                {skill.skillsTitle}
              </li>
            ))}
          </ul>
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
