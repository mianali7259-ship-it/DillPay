import express from "express";
import cors from "cors";
import helmet from "helmet";
import { authRouter } from "./routes/auth.js";
import { walletRouter } from "./routes/wallets.js";
import { coupleRouter } from "./routes/couples.js";
import { familyRouter } from "./routes/family.js";
import { brandsRouter } from "./routes/brands.js";
import { rewardsRouter } from "./routes/rewards.js";
import { gamesRouter } from "./routes/games.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "ok", service: "dillpay-backend" });
});

app.use("/auth", authRouter);
app.use("/wallets", walletRouter);
app.use("/couples", coupleRouter);
app.use("/families", familyRouter);
app.use("/brands", brandsRouter);
app.use("/rewards", rewardsRouter);
app.use("/games", gamesRouter);

const port = process.env.PORT ?? 4000;
app.listen(port, () => {
  console.log(`DillPay API running on :${port}`);
});
