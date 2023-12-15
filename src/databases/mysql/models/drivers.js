module.exports = (sequelize, DataTypes) => {
    const Drivers = sequelize.define('drivers', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },

        driver_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        vehicle_type: {
            type: DataTypes.STRING(20),
            allowNull: true,
            defaultValue: ""
        },

        vehicle_plate_number: {
            type: DataTypes.STRING(10),
            allowNull: false,
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
        modelName: 'Drivers',
        tableName: 'drivers',
        freezeTableName: true,
        timestamps: false,
    });

    return Drivers;
}