import config from '../../config/config';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'node-ts-api documentation',
    version: '0.0.1',
    description: 'This is a node express boilerplate in typescript with mongodb',
    license: {
      name: 'MIT',
      url: 'https://github.com/saisilinus/node-express-mongoose-typescript-boilerplate.git',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
      description: 'Development Server',
    },
  ],
};

export default swaggerDefinition;
