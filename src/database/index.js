import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // seta a conexão em cada model
    models
      .map(model => model.init(this.connection))
      // seta as associações entre todos os models
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
