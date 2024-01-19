import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import { Card } from "../components/Card";
import "../styles/allprojects.css";
import { getImage } from "gatsby-plugin-image";

const AllProjectsPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allPosts = data.allContentfulProjekt.nodes;
  const categories = ["All", ...new Set(allPosts.map((post) => post.category))];

  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  return (
    <Layout>
      <div>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div>
          <p
            className="projects-container"
            style={{
              color: "#333c2e",
              fontFamily: "DMS-font",
              fontSize: "40px",
            }}
          >
            All projects
          </p>
        </div>

        <div className="projects-container">
          {filteredPosts.map((Projekt) => {
            const image = getImage(Projekt.image.gatsbyImageData);

            return (
              <div key={Projekt.id}>
                <Link to={`/${Projekt.slug}`} key={Projekt.id}>
                  <div /*data-aos="fade-up"*/ className="card">
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
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulProjekt {
      nodes {
        id
        title
        category
        slug
        descriptions {
          descriptions
        }
        image {
          gatsbyImageData
        }
      }
    }
  }
`;

export default AllProjectsPage;
