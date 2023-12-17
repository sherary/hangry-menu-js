module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: ""
        },

        phone: {
            type: DataTypes.STRING(14),
            allowNull: true,
            defaultValue: "", 
        },

        password: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },

        role: {
            type: DataTypes.ENUM("customer", "restaurant"),
            allowNull: false,
            defaultValue: "customer",
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
        modelName: 'Users',
        tableName: 'users',
        freezeTableName: true,
        timestamps: false,
        // indexes: [{
        //     name: 'IDX_USER',
        //     type: 'BTREE',
        //     fields: ['email', 'phone'],
        // }, {
        //     name: 'IDX_UNIQUE',
        //     unique: true,
        //     fields: ['email', 'phone'],
        // }]
    });

    return Users;
}