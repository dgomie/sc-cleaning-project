const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();
const cors = require('cors');
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');
const { ApolloServerPluginLandingPageDisabled } = require('@apollo/server/plugin/disabled');
const services = require('./service/index');
require('./cron/cron')

const PORT = process.env.PORT || 3001;
const app = express();

const plugins = [];
if (process.env.NODE_ENV === 'production') {
  plugins.push(ApolloServerPluginLandingPageDisabled());
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins
});

const startApolloServer = async () => {
  await server.start();

  app.use(
    cors({
      origin: ['http://localhost:5173'],
    })
  );
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  app.use(services);

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();