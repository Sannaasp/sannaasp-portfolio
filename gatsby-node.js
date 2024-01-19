// Den här filen (gatsby-node.js) används för att skapa dynamiska sidor för varje projekt baserat på data från Contentful.

// Importerar nödvändiga moduler och funktioner från Gatsby.
const path = require("path");
// Definierar createPages-funktionen som kommer att köra vid byggnad av webbplatsen.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Definierar sökvägen till komponenten som ska användas för att rendera projektsidorna.

  const projectPage = path.resolve("./src/templates/project-page.js");

  // Hämtar data från GraphQL-queryn för alla Contentful-projekt
  const result = await graphql(
    `
      {
        allContentfulProjekt {
          nodes {
            id
            slug
          }
        }
      }
    `
  );
  // Hanterar eventuella fel vid hämtning av data.
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }
  const projects = result.data.allContentfulProjekt.nodes;
  // Skapa sidor för varje projekt med hjälp av createPage-funktionen.
  if (projects.length > 0) {
    projects.forEach((project) => {
      createPage({
        // Anger sökvägen för den dynamiska sidan baserat på projektets slug.
        path: `/${project.slug}/`,
        // Anger komponenten som ska användas för att rendera sidan.
        component: projectPage,
        // Skickar med kontext (data) till den dynamiska sidan, inklusive projektets id och slug.
        context: {
          id: project.id,
          slug: project.slug,
        },
      });
    });
  }
};
