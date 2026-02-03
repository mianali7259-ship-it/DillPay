CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT UNIQUE,
  email TEXT UNIQUE,
  status TEXT NOT NULL,
  pin_hash TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE wallets (
  id UUID PRIMARY KEY,
  owner_id UUID NOT NULL REFERENCES users(id),
  type TEXT NOT NULL,
  currency TEXT NOT NULL,
  balance NUMERIC NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE wallet_members (
  wallet_id UUID REFERENCES wallets(id),
  user_id UUID REFERENCES users(id),
  role TEXT NOT NULL,
  spending_limit NUMERIC,
  PRIMARY KEY (wallet_id, user_id)
);

CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  wallet_id UUID NOT NULL REFERENCES wallets(id),
  amount NUMERIC NOT NULL,
  currency TEXT NOT NULL,
  type TEXT NOT NULL,
  note TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE rewards (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  points NUMERIC NOT NULL DEFAULT 0,
  badge TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE brand_offers (
  id UUID PRIMARY KEY,
  brand_name TEXT NOT NULL,
  offer_type TEXT NOT NULL,
  value NUMERIC NOT NULL,
  active BOOLEAN DEFAULT TRUE
);
