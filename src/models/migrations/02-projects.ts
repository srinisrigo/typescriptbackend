"use strict";
import { QueryInterface } from "sequelize";
import { Sequelize, DataType } from "sequelize-typescript";


module.exports = {
    up: function (queryBuilder: QueryInterface) {
        return queryBuilder.createTable("projects", {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataType.STRING,
                allowNull: false
            },
            createdBy: {
                type: DataType.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id"
                }
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
        return queryBuilder.dropTable("projects");
    }
};