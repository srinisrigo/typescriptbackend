"use strict";
import { QueryInterface } from "sequelize";
import { Sequelize, DataType } from "sequelize-typescript";


module.exports = {
    up: function (queryBuilder: QueryInterface) {
        return queryBuilder.createTable("project_user", {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            projectId: {
                type: DataType.INTEGER,
                allowNull: false,
                references: {
                    model: "projects",
                    key: "id"
                }
            },
            userId: {
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
        return queryBuilder.dropTable("project_user");
    }
};