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
db.Menus = require('./menus.js')(sequelize, DataTypes);
db.Carts = require('./carts.js')(sequelize, DataTypes);
db.Transactions = require('./transactions.js')(sequelize, DataTypes);
db.OrderItems = require('./order_items.js')(sequelize, DataTypes);
db.Configurations = require('./configurations.js')(sequelize, DataTypes);

db.Users.hasMany(db.Outlets, {
    foreignKey: 'owner_id',
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

db.Users.hasMany(db.Transactions, {
    foreignKey: 'customer_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
})

db.Users.hasMany(db.MenuReviews, {
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

db.Outlets.hasMany(db.Transactions, {
    foreignKey: 'outlet_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Outlets.belongsTo(db.Users, {
    foreignKey: 'owner_id',
});

db.Outlets.belongsTo(db.Transactions, {
    foreignKey: 'outlet_id',
});

db.OutletLocations.hasMany(db.Outlets, {
    foreignKey: 'outlet_id',
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

db.Transactions.hasMany(db.OrderItems, {
    foreignKey: 'order_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

db.Transactions.belongsTo(db.Users, {
    foreignKey: 'customer_id',
});

db.Transactions.belongsTo(db.Configurations, {
    foreignKey: 'discount_ticket_id',
});

db.OrderItems.belongsTo(db.Transactions, {
    foreignKey: 'order_id',
});

db.Configurations.hasMany(db.Transactions, {
    foreignKey: 'discount_ticket_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
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
