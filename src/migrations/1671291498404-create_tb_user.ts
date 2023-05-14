import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class createTbUser1670763480230 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'tb_user',
      new TableIndex({
        name: 'idx_tb_user_id',
        columnNames: ['id'],
      }),
    );

    await queryRunner.createForeignKey(
      'tb_user',
      new TableForeignKey({
        columnNames: ['id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tb_user',
        onDelete: 'CASCADE',
      }),
    );

    queryRunner.clearSqlMemory();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tb_usuario');
  }
}
