import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Code extends BaseModel {
  @column({ isPrimary: true })
  declare url: number

  @column()
  declare code: string | null

}
