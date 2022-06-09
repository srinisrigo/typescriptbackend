"use strict";
import { QueryInterface } from "sequelize";
import { Sequelize, DataType } from "sequelize-typescript";


module.exports = {
    up: function (queryBuilder: QueryInterface) {
        return queryBuilder.createTable("files", {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            fileName: {
                type: DataType.STRING,
                allowNull: false
            },
            projectId: {
                type: DataType.INTEGER,
                allowNull: false,
                references: {
                    model: "projects",
                    key: "id"
                }
            },
            uploadedBy: {
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
        return queryBuilder.dropTable("files");
    }
};