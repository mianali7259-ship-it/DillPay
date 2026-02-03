import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.post("/invite", requireAuth, (req, res) => {
  const schema = z.object({ partnerId: z.string() });
  const payload = schema.safeParse(req.body);
  if (!payload.success) {
    return res.status(400).json({ error: payload.error.flatten() });
  }

  return res.json({ status: "sent", inviteId: "invite_123" });
});

router.post("/accept", requireAuth, (req, res) => {
  const schema = z.object({ inviteId: z.string() });
  const payload = schema.safeParse(req.body);
  if (!payload.success) {
    return res.status(400).json({ error: payload.error.flatten() });
  }

  return res.json({ status: "connected", coupleId: "couple_001" });
});

router.get("/goals", requireAuth, (_, res) => {
  return res.json({
    goals: [
      { id: "goal_1", title: "Weekend getaway", progress: 340, target: 600 },
      { id: "goal_2", title: "Anniversary gift", progress: 120, target: 250 }
    ]
  });
});

export const coupleRouter = router;
