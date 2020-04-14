// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', //the database driver
    connection: {
      filename: './data/car-dealer.db3' // for SQLite only
    },
    useNullAsDefault:true, // for SQLite only
    migrations: {
      //where to store the migration files
      directory: './data/migrations'
    }
  },

  // configuration used on heroku
  
production: {

},
}