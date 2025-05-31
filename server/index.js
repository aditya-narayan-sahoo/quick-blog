import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 5432;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend of the quick blog app!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
