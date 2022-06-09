"use strict";
import { QueryInterface } from "sequelize";
import { Sequelize, DataType } from "sequelize-typescript";


module.exports = {
    up: function (queryBuilder: QueryInterface) {
        return queryBuilder.createTable("files_history", {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            fileId: {
                type: DataType.INTEGER,
                allowNull: false,
                references: {
                    model: "files",
                    key: "id"
                }
            },
            versionName: {
                type: DataType.STRING,
                allowNull: false
            },
            isLatest: {
                type: DataType.BOOLEAN,
                allowNull: false,
                defaultValue: true
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
        return queryBuilder.dropTable("files_history");
    }
};