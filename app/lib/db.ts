import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  // uncomment if using local database
  // ssl: process.env.NODE_ENV === "production" ? "require" : false
});

export default sql;
