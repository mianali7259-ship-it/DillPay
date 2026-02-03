# DillPay

DillPay is a social + financial super app blending shared wallets, playful couple experiences, and brand partnerships. This repo contains a React Native (Expo) mobile client and a Node.js (Express) API scaffold.

## Architecture overview

- **Mobile**: React Native + Expo with modular screens, theme system, and navigation scaffolding.
- **Backend**: Express API with JWT auth, wallet ledger helpers, and fraud signal checks.
- **Database**: PostgreSQL schema included in `backend/src/db/schema.sql`.

## Data model highlights

- **Users** store profile, status (single/couple/family), and secure authentication metadata.
- **Wallets** support personal, couple, and family types with shared members and spending limits.
- **Transactions** are an internal ledger (credit/debit) with audit-friendly metadata.
- **Rewards** and **brand offers** capture points, cashback, and partner promotions.

## Feature flows (summary)

1. **Registration + OTP** → `/auth/otp/request` then `/auth/otp/verify` to receive a JWT.
2. **PIN setup** → `/auth/pin/setup`.
3. **Wallet operations** → `/wallets/summary`, `/wallets/transfer`, `/wallets/:walletId/transactions`.
4. **Couples wallet** → invite/accept flow plus shared goals via `/couples`.
5. **Family wallet** → add members, allowances, approvals via `/families`.
6. **Games & rewards** → `/games` and `/rewards` endpoints.
7. **Brand offers** → `/brands/offers` and `/brands/redeem`.

## Color system (extracted from logo)

Primary and secondary tones were derived from the DillPay logo gradient and applied throughout the UI:

- Primary coral: `#F4796A`
- Primary soft: `#F9A597`
- Secondary teal: `#5E8D8B`
- Secondary soft: `#A1C8C1`
- Accent blush: `#F6D1C7`
- Background: `#FDF7F4`

> Note: The repo currently includes placeholder assets. Replace `mobile/assets/*` with the official logo exports for production.

## Setup instructions

### Mobile

```bash
cd mobile
npm install
npm run start
```

If you encounter npm `403 Forbidden` errors during install, see `docs/preview-troubleshooting.md` for registry troubleshooting steps.

### Backend

```bash
cd backend
npm install
npm run dev
```

## Security notes

- JWT secret must be provided via `JWT_SECRET` environment variable.
- Use encrypted storage + biometric APIs on device for PIN/session handling.
- Fraud checks and velocity limits are stubbed in `backend/src/services/fraud.ts`.

## Deployment notes

- Deploy API behind HTTPS (e.g., Render, Fly, AWS ECS).
- Use managed PostgreSQL (e.g., RDS, Supabase) and configure connection pooling.
- Configure Firebase or SMS provider for real OTP delivery.
