import 'reflect-metadata';

import { config as configEnv } from 'dotenv';
import { DataSource } from 'typeorm';

configEnv();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: '2222',
  database: 'nest_graphql',
  entities: ['dist/**/*.model.js'],
  synchronize: false,
  logging: false,
  subscribers: [],
  migrations: [
    process.env.NODE_ENV === 'test'
      ? 'src/database/migrations/*.ts'
      : 'dist/database/migrations/*.js',
  ],
  extra: {
    charset: 'utf8mb4_general_ci',
  },
});
