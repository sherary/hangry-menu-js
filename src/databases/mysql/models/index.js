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
db.Outlets = require('./outlets.js')(sequelize, DataTypes);
db.OutletLocations = require('./outlet_locations.js')(sequelize, DataTypes);
db.CustomerLocations = require('./customer_locations.js')(sequelize, DataTypes);
db.Drivers = require('./drivers.js')(sequelize)(DataTypes);
db.Menus = require('./menus.js')(sequelize, DataTypes);
db.Carts = require('./carts.js')(sequelize, DataTypes);
db.Orders = require('./orders.js')(sequelize, DataTypes);
db.OrderItems = require('./order_items.js')(sequelize, DataTypes);
db.Deliveries = require('./deliveries.js')(sequelize, DataTypes);
db.MenuReviews = require('./menu_reviews.js')(sequelize, DataTypes);
db.DriverReviews = require('./driver_reviews.js')(sequelize, DataTypes);
db.Configurations = require('./configurations.js')(sequelize, DataTypes);

db.Users.hasMany(db.Outlets, {
    foreignKey: 'owner_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Users.hasMany(db.Drivers, {
    foreignKey: 'driver_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Users.hasMany(db.CustomerLocations, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Users.hasMany(db.Carts, {
    foreignKey: 'customer_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Users.hasMany(db.Orders, {
    foreignKey: 'customer_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
})

db.Users.hasMany(db.MenuReviews, {
    foreignKey: 'customer_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Users.hasMany(db.DriverReviews, {
    foreignKey: 'customer_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Outlets.hasMany(db.OutletLocations, {
    foreignKey: 'outlet_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Outlets.hasMany(db.Menus, {
    foreignKey: 'outlet_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Outlets.hasMany(db.Orders, {
    foreignKey: 'outlet_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Outlets.belongsTo(db.Users, {
    foreignKey: 'owner_id',
});

db.Outlets.belongsTo(db.Orders, {
    foreignKey: 'outlet_id',
});

db.OutletLocations.hasMany(db.Outlets, {
    foreignKey: 'outlet_id',
});

db.Drivers.hasMany(db.Orders, {
    foreignKey: 'driver_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Drivers.hasMany(db.Deliveries, {
    foreignKey: 'driver_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Drivers.hasMany(db.DriverReviews, {
    foreignKey: 'driver_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Drivers.belongsTo(db.Users, {
    foreignKey: 'driver_id',
});

db.CustomerLocations.belongsTo(db.Users, {
    foreignKey: 'user_id',
});

db.Menus.hasMany(db.Carts, {
    foreignKey: 'dish_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Menus.hasMany(db.OrderItems, {
    foreignKey: 'menu_item_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Menus.hasMany(db.MenuReviews, {
    foreignKey: 'menu_item_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Menus.belongsTo(db.Outlets, {
    foreignKey: 'outlet_id',
});

db.Carts.belongsTo(db.Users, {
    foreignKey: 'customer_id',
});

db.Carts.belongsTo(db.Menus, {
    foreignKey: 'dish_id',
});

db.Orders.hasMany(db.OrderItems, {
    foreignKey: 'order_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Orders.hasMany(db.Deliveries, {
    foreignKey: 'order_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Orders.belongsTo(db.Users, {
    foreignKey: 'customer_id',
});

db.OrderItems.belongsTo(db.Orders, {
    foreignKey: 'order_id',
});

db.Deliveries.belongsTo(db.Orders, {
    foreignKey: 'order_id',
});

db.MenuReviews.belongsTo(db.Users, {
    foreignKey: 'customer_id',
});

db.MenuReviews.belongsTo(db.Menus, {
    foreignKey: 'menu_item_id',
});

db.DriverReviews.belongsTo(db.Users, {
    foreignKey: 'customer_id',
});

/**
 * trial many to many associations
 */

db.Menus.belongsToMany(db.Carts, {
    through: 'CartMenu',
    foreignKey: 'menu_id',
    otherKey: 'cart_id',
});

db.Carts.belongsToMany(db.Menus, {
    through: 'CartMenu',
    foreignKey: 'cart_id',
    otherKey: 'menu_id',
});

module.exports = db;
