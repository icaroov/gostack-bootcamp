import Sequelize from 'sequelize';

// Importar os models
import User from '../app/models/User';

// Configurações do banco de dados
import databaseConfig from '../config/database';

// Array com todos models da aplicação
const models = [User];

class Database {
  constructor() {
    // Chama o método init assim que inicia
    this.init(); 
  }

  init() {
    // Instanciando a variável connection
    this.connection = new Sequelize(databaseConfig);

    // Percorre o array models, retornando todos os models que estão
    // dentro dele.
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
