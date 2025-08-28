import express, {
  type NextFunction,
  type Response,
  type Request,
} from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
// files
import type { errorMiddleware } from "./types";
import { ApiError } from "./handler/error.handler";
import { ApiResponse } from "./handler/response.handler";
import { CONFIG } from "./config";
import { xhamsterRouter } from "./routes/xhamster.route";
// import { kambadaRouter } from "./routes/kambada.route";
// middlewares
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ limit: "20kb" }));
app.use(helmet());
app.use(morgan("dev"));

// route
app.use("/api/v1", xhamsterRouter);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const data = {
    "api-endpoints": {
      "/": `${CONFIG.BASE_URL}/`,
    },
  };
  return ApiResponse.success(
    res,
    "welcome to alpha skymute scrapper",
    200,
    data,
  );
});

app.use(
  (
    err: Error,
    req: Request,
    res: Response<errorMiddleware>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction,
  ) => {
    if (err instanceof ApiError) {
      return ApiResponse.error(res, err.message, err.statusCode, err.errors);
    }
    return ApiResponse.error(res, "unexpected error occurred", 500, null);
  },
);

export default app;
