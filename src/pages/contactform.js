import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/contactPage.css";

const contactPage = ({ data }) => {
  const image = getImage(data.contentfulContact.contactImage.gatsbyImageData);
  return (
    <Layout>
      <div>
        <main className="big-contact-box">
          <div className="contact-box">
            {" "}
            <GatsbyImage
              image={image}
              alt="Header Image"
              className="header-img"
            />
          </div>
          <div className="contact-text">
            <p
              style={{
                fontSize: "50px",
                color: "#333c2e",
                marginLeft: "20px",
                fontFamily: "DMS-font",
              }}
            >
              Contact Me
            </p>
            <div className="contact-icons">
              <div>
                <StaticImage
                  className="contact-image"
                  src="../images/phone.png"
                  alt="Phone Image"
                />
              </div>

              <div className="icons">
                <h1>{data.contentfulContact.phone}</h1>
              </div>
            </div>
            <div className="contact-icons">
              <StaticImage
                className="contact-image"
                src="../images/email.png"
                alt="Phone Image"
              />
              <div className="icons">
                <p>{data.contentfulContact.mail}</p>
              </div>
            </div>
            <div className="contact-icons">
              <StaticImage
                className="contact-image"
                src="../images/linkedin.png"
                alt="Phone Image"
              />
              <div className="icons">
                <a
                  href={data.contentfulContact.linkedinlink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{data.contentfulContact.linkedin}</p>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulContact {
      phone
      mail
      linkedin
      linkedinlink
      contactImage {
        gatsbyImageData
      }
    }
  }
`;

export default contactPage;
