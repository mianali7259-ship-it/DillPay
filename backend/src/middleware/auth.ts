import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "change-me";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ error: "Missing auth header" });
  }

  const token = header.replace("Bearer ", "");
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload as Record<string, string>;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
