import { createConnection, Connection } from "typeorm";

const connectPostgreSQL = async () => {
  const conn = await createConnection({
    name: process.env.TYPEORM_CONNECTION,
    type: "postgres",
    url: process.env.TYPEORM_URL!,
    password: process.env.TYPEORM_PASSWORD!,
    database: process.env.TYPEORM_DATABASE!,
    entities: ["src/entities/*.ts"],
    synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
    logging: process.env.TYPEORM_LOGGING === "true",
  });
};

export default connectPostgreSQL;
