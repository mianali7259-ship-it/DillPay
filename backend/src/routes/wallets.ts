import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";
import { createLedgerEntry } from "../services/ledger.js";
import { evaluateFraudRisk } from "../services/fraud.js";

const router = Router();

router.get("/summary", requireAuth, (_, res) => {
  return res.json({
    wallets: [
      { id: "personal", balance: 245050, currency: "PKR" },
      { id: "couple", balance: 82025, currency: "PKR" },
      { id: "family", balance: 132000, currency: "PKR" }
    ]
  });
});

router.post("/transfer", requireAuth, (req, res) => {
  const schema = z.object({
    walletId: z.string(),
    amount: z.number().positive(),
    currency: z.string(),
    note: z.string().optional()
  });
  const payload = schema.safeParse(req.body);
  if (!payload.success) {
    return res.status(400).json({ error: payload.error.flatten() });
  }

  const fraud = evaluateFraudRisk(payload.data.amount);
  if (fraud.flagged) {
    return res.status(403).json({ status: "review", fraud });
  }

  const entry = createLedgerEntry({
    walletId: payload.data.walletId,
    amount: payload.data.amount,
    currency: payload.data.currency,
    type: "debit",
    description: payload.data.note ?? "Wallet transfer"
  });

  return res.json({ status: "completed", entry });
});

router.get("/:walletId/transactions", requireAuth, (req, res) => {
  return res.json({
    walletId: req.params.walletId,
    transactions: [
      createLedgerEntry({
        walletId: req.params.walletId,
        amount: 5490,
        currency: "PKR",
        type: "debit",
        description: "Market Basket"
      })
    ]
  });
});

export const walletRouter = router;
