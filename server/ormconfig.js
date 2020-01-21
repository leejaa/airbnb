const local =   
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "jahun",
  "password": "ncm2154",
  "database": "airbnb",
  "synchronize": false,
  "logging": false,
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["src/migration/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
};

const production = 
{
  "type": "postgres",
  "host": "ec2-107-22-216-151.compute-1.amazonaws.com",
  "port": 5432,
  "username": "qomefyqegswzck",
  "password": "1a309b9befa850337bc68848c1fbed7f368be5f73dd32fa5e74dcb0dd3b83015",
  "database": "dc45or7cf1v2lp",
  "synchronize": false,
  "logging": false,
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["src/migration/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

module.exports = process.env.IS_PRODUCTION === 'true' ? production : local;