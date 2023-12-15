module.exports = (sequelize, DataTypes) => {
    const DriverReview = sequelize.define('driver_reviews', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },

        customer_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        driver_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Drivers',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        rating: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: ""
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
        modelName: 'DriverReviews',
        tableName: 'driver_reviews',
        freezeTableName: true,
        timestamps: false,
    });

    return DriverReview;
}