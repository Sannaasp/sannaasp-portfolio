import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { useEffect } from "react";
import "../styles/projectPage.css";

const ProjectPage = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = data.projekt.images.map((img) =>
    getImage(img.gatsbyImageData)
  );

  const goToPreviousSlide = () => {
    setActiveSlide(activeSlide === 0 ? images.length - 1 : activeSlide - 1);
  };

  const goToNextSlide = () => {
    setActiveSlide(activeSlide === images.length - 1 ? 0 : activeSlide + 1);
    console.log(activeSlide);
  };
  useEffect(() => {
    console.log("Active Slide: ", activeSlide);
  }, [activeSlide]);

  const image = getImage(data.projekt.image.gatsbyImageData);

  return (
    <Layout>
      <div className="project-page-container">
        <div className="project-page-header">
          <GatsbyImage
            image={image}
            alt="Header Image"
            className="project-header-img"
          />
          <div className="project-page-text">
            <h1
              className="margin-bottom-10"
              style={{ fontSize: "40px", color: "#333c2e" }}
            >
              {data.projekt.title}
            </h1>
            <p style={{ fontSize: "15px", color: "#333c2e" }}>
              {data.projekt.descriptions.descriptions}
            </p>
            <p style={{ fontSize: "15px", color: "#333c2e" }}>
              {data.projekt.longDescription.longDescription}
            </p>

            <div className="projects-button">
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
        <div
          className="relative overflow-hidden rounded-lg"
          style={{ height: "300px" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === activeSlide ? "block" : "hidden"
              }`}
            >
              <GatsbyImage
                image={image}
                alt={`Slide ${index}`}
                className="w-full h-full"
              />
            </div>
          ))}

          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{ height: "300px" }}
            id="gallery"
            data-carousel="slide"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                ></img>
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                ></img>
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                ></img>
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                ></img>
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                ></img>
              </div>
            </div>
            <button
              onClick={goToPreviousSlide}
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              onClick={goToNextSlide}
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;

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
