import express from "express";
import morgan from "morgan";
import cors from "cors";

function sleep(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, ms);
  });
}

export const createServer = () => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  app.get("/message/:name", async (req, res) => {
    // await sleep(3000);
    return res.json({ message: `Welcome ${req.params.name}` });
  });

  app.get("/api/user", (req, res) => {
    res.json({
      id: 1,
      name: "John",
    });
  });

  app.get("/healthz", (req, res) => {
    return res.json({ ok: true });
  });

  return app;
};
