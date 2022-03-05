const resolvers = {
  Query: {
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    },
    async link(root, { id }, { models }) {
      return models.Link.findByPk(id);
    }
  },
  Mutations: {
    async createLink(root, { url, slug }, { models }) {
      return models.Link.create({
        url,
        slug
      });
    }
  }
};

module.exports = resolvers;
