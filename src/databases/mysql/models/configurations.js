module.exports = (sequelize, DataTypes) => {
    const Configurations = sequelize.define('configurations', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },

        key: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

        value: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: ""
        },

        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0.00,
        },

        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        end_date: {
            type: DataTypes.DATE,
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
        modelName: 'Configurations',
        tableName: 'configurations',
        freezeTableName: true,
        timestamps: false,
    });

    return Configurations;
}