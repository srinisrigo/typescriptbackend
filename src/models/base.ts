import { Sequelize } from "sequelize-typescript";

import { load as configLoader } from "../config/env";

const config = configLoader();

let sequelize: Sequelize;

export function getInstance(): Promise<Sequelize> {
  if (!sequelize) {
    sequelize = new Sequelize(config.db.database, config.db.username, config.db.password,
      {
      logging: false,
      dialect: "postgres",
      host: config.db.host,
      port: config.db.port,
      modelPaths: [
        __dirname + "/../modules/users/models/",
        __dirname + "/../modules/project/models/"
      ],
      pool: {
        min: 1,
        max: 20,
        idle: 10000
      }
    });
  }
  return Promise.resolve(sequelize);
}

export function initialize(): Promise<Sequelize> {
  return getInstance();
}
