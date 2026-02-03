import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.post("/members", requireAuth, (req, res) => {
  const schema = z.object({ name: z.string(), role: z.string() });
  const payload = schema.safeParse(req.body);
  if (!payload.success) {
    return res.status(400).json({ error: payload.error.flatten() });
  }

  return res.json({ status: "added", memberId: "member_001" });
});

router.get("/overview", requireAuth, (_, res) => {
  return res.json({
    familyId: "family_001",
    members: 4,
    allowanceSchedule: "Friday",
    pendingApprovals: 2
  });
});

router.post("/allowance", requireAuth, (req, res) => {
  const schema = z.object({ memberId: z.string(), amount: z.number().positive() });
  const payload = schema.safeParse(req.body);
  if (!payload.success) {
    return res.status(400).json({ error: payload.error.flatten() });
  }

  return res.json({ status: "scheduled" });
});

export const familyRouter = router;
