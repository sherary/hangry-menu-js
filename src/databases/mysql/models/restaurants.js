module.exports = (sequelize, DataTypes) => {
    const Restaurants = sequelize.define('restaurants', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },

        owner_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            reference: {
                model: 'Users',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: ""
        },

        phone: {
            type: DataTypes.STRING(14),
            allowNull: true,
            defaultValue: "", 
        },

        added_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Restaurants',
        tableName: 'restaurants',
        freezeTableName: true,
        timestamps: false,
    });

    return Restaurants;
}