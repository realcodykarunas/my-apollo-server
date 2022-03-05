const resolvers = {
  Query: {
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },
  Mutations: {
    async createLink(root, { url, slug }, { models }) {
      return models.Link.create({
        root,
        url,
        slug
      });
    }
  }
};

module.exports = resolvers;
