const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const projectPage = path.resolve("./src/templates/project-page.js");

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
        component: projectPage,
        context: {
          id: project.id,
          slug: project.slug,
        },
      });
    });
  }
};

//   const AllProjectsPageTemplate = path.resolve("./src/pages/allprojects.js");
//   createPage({
//     path: "/allprojects",
//     component: AllProjectsPageTemplate,
//     context: {},
//   });
// };

// const path = require('path')
// exports.createPages = async ({ graphql, actions, reporter }) => {
//  const { createPage } = actions
//  // Define a template for blog post
//  const blogPost = path.resolve('./src/templates/blog-post.js')
//  const result = await graphql(
//  `
//  {
//  allContentfulBlog {
//  nodes {
//  title
//  slug
//  }
//  }
//  }
//  `
//  )
//  if (result.errors) {
//  reporter.panicOnBuild(
//  `There was an error loading your Contentful posts`,
//  result.errors
//  )
//  return
//  }
//  const posts = result.data.allContentfulBlog.nodes
//  if (posts.length > 0) {
//  posts.forEach((post) => {
//  createPage({
//  path: `/${post.slug}/`,
//  component: blogPost,
//  context: {
//  slug: post.slug,
//  },
//  })
//  })
//  }
// }
