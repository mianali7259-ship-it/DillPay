import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/summary", requireAuth, (_, res) => {
  return res.json({
    points: 2450,
    badges: ["Couple streak", "Family saver"],
    cashbackPending: 18.2
  });
});

router.post("/redeem", requireAuth, (_, res) => {
  return res.json({ status: "redeemed", rewardId: "reward_789" });
});

export const rewardsRouter = router;
