import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/contact.css";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "../styles/layout.module.css";

export const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContact {
        phone
        mail
        linkedin
      }
    }
  `);

  return (
    <main className="contact-container">
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
          <p>{data.contentfulContact.linkedin}</p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
