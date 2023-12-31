module.exports = (sequelize, DataTypes) => {
    const Locations = sequelize.define('customer_locations', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },

        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        tag: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: "Home Address"
        },

        street_address: {
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: "",
        },

        additional_info: {
            type: DataTypes.STRING(100),
            allowNull: true,
            defaultValue: ""
        },

        postal_code: {
            type: DataTypes.STRING(6),
            allowNull: true,
            defaultValue: 0
        },

        city: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: "JAKARTA RAYA"
        },

        province: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: "DKI JAKARTA",
        },

        country: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: "INDONESIA",
        },

        lat: {
            type: DataTypes.DECIMAL(10, 8),
            allowNull: false,
            defaultValue: 0.0
        },

        long: {
            type: DataTypes.DECIMAL(10, 8),
            allowNull: false,
            defaultValue: 0.0
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
        modelName: 'CustomerLocations',
        tableName: 'customer_locations',
        freezeTableName: true,
        timestamps: false,
    });

    return Locations;
}