module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/dev.sqlite3",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
  },
};
