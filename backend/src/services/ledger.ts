export interface LedgerEntry {
  id: string;
  walletId: string;
  amount: number;
  currency: string;
  type: "credit" | "debit";
  description: string;
  createdAt: string;
}

export function createLedgerEntry(entry: Omit<LedgerEntry, "id" | "createdAt">): LedgerEntry {
  return {
    ...entry,
    id: `txn_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString()
  };
}

export function calculateBalance(entries: LedgerEntry[]) {
  return entries.reduce((balance, entry) => {
    return entry.type === "credit" ? balance + entry.amount : balance - entry.amount;
  }, 0);
}
