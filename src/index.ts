import express from "express";
import { MockMovies } from "./controllers/movie.controller"; // the class we created
const app = express();
const port = 5000;

const movies = new MockMovies();

app.use(express.json());

app.get("/api/v1/trending", async (req, res) => {
  try {
    const result = await movies.getTrending();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

app.get("/api/v1/search/:query", async (req, res) => {
  try {
    const query = req.params.query as string;
    const result = await movies.getSearch(query || "");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

app.post("/api/v1/details", async (req, res) => {
  try {
    const result = await movies.getDetails(req.body.id);
    res.json(result);
  } catch (err) {
    res.status(404).json({ error: (err as Error).message });
  }
});

app.post("/api/v1/streams", async (req, res) => {
  try {
    const result = await movies.getStreams(req.body.id);
    res.json([result]);
  } catch (err) {
    res.status(404).json({ error: (err as Error).message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
