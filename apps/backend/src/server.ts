import express from "express";
import morgan from "morgan";
import cors from "cors";
import axios from "axios";
import { log } from "logger";
import { verifyToken } from "./middleware/verifyToken";

// function sleep(ms: number): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("done");
//     }, ms);
//   });
// }

export const createServer: Function = () => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  app.get("/message/:name", verifyToken, async (req, res) => {
    // await sleep(3000);
    // return res.status(401).send("Unauthorized");
    return res.json({ message: `Welcome ${req.params.name}` });
  });

  app.get("/api/user", verifyToken, async (req, res) => {
    if (req.headers.authorization) {
      try {
        const response = await axios.get(
          `${process.env.COGNITO_URL}/oauth2/userInfo`,
          {
            headers: {
              Authorization: `Bearer ${req.headers.authorization.replace(
                "Bearer ",
                ""
              )}`,
            },
          }
        );
        // @ts-ignore
        return res.json({
          id: response.data.sub,
          name: response.data.name,
        });
      } catch (error) {
        log(error);
        return res.status(404).send("Not found");
      }
    }
    res.status(404).send("Not found");
  });

  app.get("/healthz", (req, res) => {
    return res.json({ ok: true });
  });

  return app;
};
