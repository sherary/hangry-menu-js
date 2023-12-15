const sequelize = require('../../../../config/db.js');
const { Sequelize, DataTypes } = require('sequelize');

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.log(`Error authenticating database: ${err}`)
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require('./users.js')(sequelize, DataTypes);
db.Restaurants = require('./restaurants.js')(sequelize, DataTypes);
db.Drivers = require('./drivers.js')(sequelize)(DataTypes);
db.Locations = require('./locations.js')(sequelize, DataTypes);
db.MenuItems = require('./menu_items.js')(sequelize, DataTypes);
db.Carts = require('./carts.js')(sequelize, DataTypes);
db.Orders = require('./orders.js')(sequelize, DataTypes);
db.OrderItems = require('./order_items.js')(sequelize, DataTypes);
db.Deliveries = require('./deliveries.js')(sequelize, DataTypes);
db.MenuReviews = require('./menu_reviews.js')(sequelize, DataTypes);
db.DriverReviews = require('./driver_reviews.js')(sequelize, DataTypes);
db.Configurations = require('./configurations.js')(sequelize, DataTypes);

db.Users.hasMany(db.Restaurants, {
    foreignKey: 'owner_id',
    onDelete: 'cascade',
});

db.Users.hasMany(db.Drivers, {
    foreignKey: 'driver_id',
    onDelete: 'cascade',
});

db.Restaurants.belongsTo(db.Users, {
    foreignKey: 'owner_id',
});

db.Drivers.belongsTo(db.Users, {
    foreignKey: 'driver_id',
});



module.exports = db;
