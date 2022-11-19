import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);

  res.send({
    result:
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/Eurasian_wolf.JPG",
  });
});

app.listen(3001, () => {
  console.log("API online em http://localhost:3001");
});

