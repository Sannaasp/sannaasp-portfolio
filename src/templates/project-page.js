import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/projectPage.css";
import Layout from "../components/Layout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../components/Card";

const ProjectPage = ({ data }) => {
  console.log("Data from GraphQL:", data);

  const image = getImage(data.projekt.image.gatsbyImageData);

  const carouselSettings = {
    showArrows: true,
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
    autoPlay: true,
    interval: 5000, // 5 seconds
  };

  return (
    <Layout>
      <div className="project-page-container">
        <div className="project-page-header">
          <div className="carousel-container">
            <Carousel {...carouselSettings}>
              {data.projekt.images.map((image, index) => {
                const images = getImage(image.gatsbyImageData);
                return (
                  <div key={index}>
                    <GatsbyImage
                      image={images}
                      alt={`Slide ${index + 1}`}
                      className="carousel-image"
                    />
                  </div>
                );
              })}
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
                  backgroundColor: "#333c2e", // Replace with your desired color
                  hover: {
                    backgroundColor: "#yourNewHoverColor", // Replace with your desired hover color
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

        {/* <div className="gallery">
          {data.projekt.images.map((image, index) => {
            const images = getImage(image.gatsbyImageData);
            return (
              <div key={index} className="gallery-item">
                <GatsbyImage image={images} alt="" className="image-size" />
              </div>
            );
          })}
        </div> */}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    projekt: contentfulProjekt(slug: { eq: $slug }) {
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
