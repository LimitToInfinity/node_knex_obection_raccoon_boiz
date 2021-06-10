const { Model } = require('objection');
const database = require('../db');
Model.knex(database);

class Can extends Model {
  static tableName = 'cans';
}

module.exports = Can;