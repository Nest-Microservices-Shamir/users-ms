import { UUIDV4 } from 'sequelize';
import { Column, DataType, Model, Scopes, Table } from 'sequelize-typescript';


@Scopes(() => ({
  withoutPassword: {
    attributes: { exclude: ['password'] },
  }
}))
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'user',
  freezeTableName: true,
})
export class User extends Model {
  
    @Column({ type: DataType.UUID, defaultValue: UUIDV4(), primaryKey: true })
    id: string;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;
}
