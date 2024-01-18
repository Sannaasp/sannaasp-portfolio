import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/header.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "../styles/layout.module.css";

export const Header = ({ headerTitle, headerImg, headerDescription }) => {
  console.log(headerImg);

  const data = useStaticQuery(graphql`
    query {
      contentfulHeader {
        headerTitle
        headerImg {
          gatsbyImageData
        }

        headerDescription {
          headerDescription
        }
      }
    }
  `);
  console.log(data);

  const image = getImage(data.contentfulHeader.headerImg.gatsbyImageData);

  console.log(data.contentfulHeader?.headerImg.gatsbyImageData);

  return (
    <div className="flex-container">
      <div className="text-container">
        <div data-aos="fade-right" data-aos-duration="2000">
          <header
            className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white custom-header"
            style={{ transition: "opacity 2s ease-in-out", color: "#333c2e" }}
          >
            <p style={{ color: "#333c2e" }}>
              {data.contentfulHeader.headerTitle}
            </p>
          </header>
        </div>

        <p>{data.contentfulHeader.headerDescription.headerDescription}</p>
        <div className="contact-button">
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
            <Link to="/contactform" className={navLinks}>
              Contact me
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
      <div className="header-container">
        {/* <img
          className="header-img"
          src={data.contentfulHeader.headerImg.file.url}
          alt="Header Image"
        /> */}
        <div className="img-container">
          <GatsbyImage
            image={image}
            alt="Header Image"
            className="header-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
