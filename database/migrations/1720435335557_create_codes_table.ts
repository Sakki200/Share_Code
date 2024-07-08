import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'codes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('url').primary().notNullable()
      table.text('code').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
