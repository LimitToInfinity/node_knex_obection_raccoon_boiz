const { Model } = require('objection');
const database = require('../db');
Model.knex(database);

const Can = require('./can');

class Raccoon extends Model {
  static tableName = 'raccoons';

  static relationMappings = {
    cans: {
      relation: Model.ManyToManyRelation,
      modelClass: Can,
      join: {
        from: 'raccoons.id',
        through: {
          from: 'raccoon_cans.raccoon_id',
          to: 'raccoon_cans.can_id'
        },
        to: 'cans.id'
      }
    }
  };
}

module.exports = { Raccoon };