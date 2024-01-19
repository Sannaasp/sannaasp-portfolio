import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/projectPage.css";
import Layout from "../components/Layout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Komponenten ProjectPage tar emot data som prop och visar detaljer för ett projekt.
// Hämta bilder från projektets data och konvertera dem till GatsbyImage-objekt.

const ProjectPage = ({ data }) => {
  const images = data.projekt.images.map((image) => getImage(image));

  return (
    <Layout>
      <div className="project-page-container">
        <div className="project-page-header">
          <div className="carousel-container">
            {/* Använder ett externt Carousel-bibliotek för att skapa en bildkarusell med autoPlay och infiniteLoop */}
            <Carousel autoPlay infiniteLoop className="w-full h-full">
              {/* Mappar igenom varje bild i images och skapar en bildkomponent i karusellen */}
              {images.map((image, index) => (
                <div key={index} className="h-full w-full">
                  <GatsbyImage
                    className="object-cover h-full w-full"
                    image={image}
                    alt={`Project Image ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="project-page-text">
            <h1
              className="margin-bottom-10"
              style={{
                fontFamily: "DMS-font",
                fontSize: "40px",
                color: "#333c2e",
              }}
            >
              {data.projekt.title}
            </h1>
            <p style={{ fontSize: "15px", color: "#333c2e" }}>
              {data.projekt.descriptions.descriptions}
            </p>
            <p style={{ fontSize: "15px", color: "#333c2e" }}>
              {data.projekt.longDescription.longDescription}
            </p>

            <div className="project-button">
              <a
                href={data.projekt.link}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                style={{
                  backgroundColor: "#333c2e",
                  hover: {
                    backgroundColor: "#yourNewHoverColor",
                  },
                }}
              >
                Visit Project
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Denna GraphQL-fråga används för att hämta information om ett projekt från Contentful baserat på dess unika slug. Den extraherar projektets titel, länk, beskrivningar (i form av en lista), lång beskrivning och bilder för användning i den associerade Gatsby-sidan.

export const pageQuery = graphql`
  query templateQuery($slug: String!) {
    projekt: contentfulProjekt(slug: { eq: $slug }) {
      id
      slug
      title
      link
      image {
        gatsbyImageData
      }
      descriptions {
        descriptions
      }
      longDescription {
        longDescription
      }
      images {
        gatsbyImageData
      }
    }
  }
`;

export default ProjectPage;
