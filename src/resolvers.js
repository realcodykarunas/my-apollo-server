const resolvers = {
  Query: {
    async allRecipes(root, args, { models }) {
      return models.Recipe.findAll();
    },
    async recipe(root, { id }, { models }) {
      return models.Recipe.findByPk(id);
    },
    async allBooks(root, { id }, { models }) {
      return models.Book.findAll(id);
    }
  }
};

module.exports = resolvers;
