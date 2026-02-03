import { TransactionItem, WalletSummary } from "../types";

export const wallets: WalletSummary[] = [
  {
    id: "personal",
    title: "Personal Wallet",
    balance: 245050,
    currency: "PKR",
    lastActivity: "Salary top-up · Today"
  },
  {
    id: "couple",
    title: "Couples Wallet",
    balance: 82025,
    currency: "PKR",
    lastActivity: "Dinner goal · Yesterday"
  },
  {
    id: "family",
    title: "Family Wallet",
    balance: 132000,
    currency: "PKR",
    lastActivity: "Allowance sent · Mon"
  }
];

export const recentTransactions: TransactionItem[] = [
  {
    id: "txn_1",
    title: "Coffee & Cozy",
    amount: 1250,
    currency: "PKR",
    timestamp: "09:24 AM",
    type: "debit",
    note: "Morning boost ☕"
  },
  {
    id: "txn_2",
    title: "Couple Challenge Reward",
    amount: 800,
    currency: "PKR",
    timestamp: "Yesterday",
    type: "credit",
    note: "7-day streak"
  },
  {
    id: "txn_3",
    title: "Market Basket",
    amount: 5490,
    currency: "PKR",
    timestamp: "Mon",
    type: "debit"
  }
];
