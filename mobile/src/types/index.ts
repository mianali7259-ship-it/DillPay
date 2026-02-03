export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  avatarUrl?: string;
  status: "single" | "couple" | "family";
}

export interface WalletSummary {
  id: string;
  title: string;
  balance: number;
  currency: string;
  lastActivity: string;
}

export interface TransactionItem {
  id: string;
  title: string;
  amount: number;
  currency: string;
  timestamp: string;
  type: "credit" | "debit";
  note?: string;
}
