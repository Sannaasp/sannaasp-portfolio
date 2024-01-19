const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const projectPageTemplate = path.resolve("./src/templates/project-page.js");

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
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }
  const projects = result.data.allContentfulProjekt.nodes;
  if (projects.length > 0) {
    projects.forEach((project) => {
      createPage({
        path: `/${project.slug}/`,
        component: projectPageTemplate,
        context: {
          id: project.id,
          slug: project.slug,
        },
      });
    });
  }

  const AllProjectsPageTemplate = path.resolve("./src/pages/allprojects.js");
  createPage({
    path: "/allprojects",
    component: AllProjectsPageTemplate,
    context: {},
  });
};
