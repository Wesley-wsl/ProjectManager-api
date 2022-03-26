import { createConnection } from "typeorm";

if (process.env.DATABASE_URL) {
    createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: ["dist/entities/*.*"],
        extra: {
            ssl: true,
        },
    });
} else {
    createConnection();
}
