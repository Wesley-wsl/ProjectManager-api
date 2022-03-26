import { createConnection } from "typeorm";

if (process.env.DATABASE_URL) {
    createConnection({
        type: "postgres",
        url: `${process.env.DATABASE_URL}`,
    });
} else {
    createConnection();
}
