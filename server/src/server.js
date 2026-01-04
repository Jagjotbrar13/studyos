import app from "./app.js";
import pool from "./db/index.js";
import { initDb } from "./db/init.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  try {
    await pool.query("SELECT 1");
    await initDb();
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error("Startup failed", err);
  }
});
