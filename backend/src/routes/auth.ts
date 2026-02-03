import { Router } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET ?? "change-me";

const otpRequestSchema = z.object({
  channel: z.enum(["phone", "email"]),
  identifier: z.string().min(6)
});

const otpVerifySchema = z.object({
  identifier: z.string().min(6),
  otp: z.string().min(4)
});

router.post("/otp/request", (req, res) => {
  const payload = otpRequestSchema.safeParse(req.body);
  if (!payload.success) {
    return res.status(400).json({ error: payload.error.flatten() });
  }

  return res.json({
    status: "sent",
    cooldownSeconds: 30
  });
});

router.post("/otp/verify", (req, res) => {
  const payload = otpVerifySchema.safeParse(req.body);
  if (!payload.success) {
    return res.status(400).json({ error: payload.error.flatten() });
  }

  const token = jwt.sign(
    { userId: "user_123", status: "couple" },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  return res.json({
    token,
    profile: {
      id: "user_123",
      name: "Amina Rhodes",
      phone: payload.data.identifier,
      status: "couple"
    }
  });
});

router.post("/pin/setup", (req, res) => {
  const schema = z.object({ pin: z.string().length(4) });
  const payload = schema.safeParse(req.body);
  if (!payload.success) {
    return res.status(400).json({ error: payload.error.flatten() });
  }

  return res.json({ status: "pin_set" });
});

export const authRouter = router;
