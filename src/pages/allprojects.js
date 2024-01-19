import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import { Card } from "../components/Card";
import "../styles/allprojects.css";
import { getImage } from "gatsby-plugin-image";

// Komponenten AllProjectsPage tar emot data som prop och visar en sida med alla projekt.
// Använder useState-hook för att hantera den valda kategorin för att filtrera projekt.
const AllProjectsPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Hämtar alla projekt från data och lagrar dem i allPosts.
  const allPosts = data.allContentfulProjekt.nodes;
  // Skapar en array av unika kategorier, inklusive "All", från alla projekt.
  const categories = ["All", ...new Set(allPosts.map((post) => post.category))];

  // Skapar en ny array 'filteredPosts' baserat på det valda valet av kategori.
  // Om 'selectedCategory' är "All", inkludera alla poster, annars filtreras poster baserat på kategorin.
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
