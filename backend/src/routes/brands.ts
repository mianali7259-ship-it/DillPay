import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/offers", requireAuth, (_, res) => {
  return res.json({
    offers: [
      { id: "offer_1", brand: "Bloom Cafe", cashback: 0.08 },
      { id: "offer_2", brand: "Sunny Travel", discount: 40 },
      { id: "offer_3", brand: "Fresh Cart", pointsMultiplier: 5 }
    ]
  });
});

router.post("/redeem", requireAuth, (_, res) => {
  return res.json({ status: "redeemed", pointsUsed: 250 });
});

export const brandsRouter = router;
