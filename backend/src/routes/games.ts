import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/daily", requireAuth, (_, res) => {
  return res.json({
    challenges: [
      { id: "challenge_1", title: "Daily Love Quest", rewardPoints: 20 },
      { id: "challenge_2", title: "Budget Duo", rewardPoints: 15 }
    ]
  });
});

router.post("/complete", requireAuth, (_, res) => {
  return res.json({ status: "completed", pointsAwarded: 20 });
});

export const gamesRouter = router;
