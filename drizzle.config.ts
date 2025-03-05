// Add Drizzle config file
import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env.local' });

// Add where the database is hosted
export default defineConfig({
    schema: "./database/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
