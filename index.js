const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
const models = require("./models");
const slugify = require("slugify");
const shortUrl = require("node-url-shortener");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (req) => {
    console.log("Body: ", req.req.body);
    const { variables } = req.req.body;
    console.log(variables);

    let shortnedUrl = "";
    shortUrl.short(`${variables.url}/${variables.slug}`, (err, url) => {
      shortnedUrl = url;
      console.log(shortnedUrl);
    });

    const linkToSave = {
      url: shortnedUrl,
      slug: slugify(variables.slug)
    };

    console.log(linkToSave);
    return { linkToSave };

    /**
     * TODO:
     * - Format Slug
     * - Format Final payload
     * - Save to DB
     */
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
