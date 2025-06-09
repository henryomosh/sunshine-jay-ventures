import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  // ssl: process.env.NODE_ENV === "production" ? "require" : false
  ssl: process.env.NODE_ENV === "production" ? "require" : false,
});

export default sql;
