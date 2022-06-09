"use strict";
import { QueryInterface } from "sequelize";
import { Sequelize, DataType } from "sequelize-typescript";


module.exports = {
    up: function (queryBuilder: QueryInterface) {
        return queryBuilder.createTable("users", {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstname: {
                type: DataType.STRING,
                allowNull: false
            },
            lastname: {
                type: DataType.STRING,
                allowNull: false
            },
            contactNo: {
                type: DataType.STRING,
                allowNull: true
            },
            email: {
                type: DataType.STRING,
                allowNull: false
            },
            password: {
                type: DataType.STRING,
                allowNull: false
            },
            token: {
                type: DataType.STRING,
                allowNull: true
            },
            createdAt: {
                type: DataType.DATE
            },
            updatedAt: {
                type: DataType.DATE
            }
        });
    },

    down: function (queryBuilder: QueryInterface) {
        return queryBuilder.dropTable("users");
    }
};