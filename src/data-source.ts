import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Comment} from "./entity/Comment"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "comment",
    synchronize: true,
    logging: false,
    entities: [User, Comment],
    migrations: [],
    subscribers: [],
})
