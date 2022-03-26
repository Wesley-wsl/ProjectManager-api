import { createConnection } from "typeorm";

export default function database() {
    console.log(process.env.DATABASE_URL);
    if (process.env.DATABASE_URL) {
        createConnection({
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: ["dist/api/entities/*.*"],
            extra: {
                ssl: {
                    require: false,
                    rejectUnauthorized: false,
                },
            },
        });
    }

    if (!process.env.DATABASE_URL) createConnection();
}
