const resolvers = {
  Query: {
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    },
    async link(root, { id }, { models }) {
      return models.Link.findByPk(id);
    }
  }
};

module.exports = resolvers;
