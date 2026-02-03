export interface UserRecord {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  status: "single" | "couple" | "family";
}

export interface WalletRecord {
  id: string;
  ownerId: string;
  type: "personal" | "couple" | "family";
  currency: string;
  balance: number;
}

export interface TransactionRecord {
  id: string;
  walletId: string;
  amount: number;
  currency: string;
  type: "credit" | "debit";
  note?: string;
  createdAt: string;
}
