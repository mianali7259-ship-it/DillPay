import { TransactionItem } from "../types";

export function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency
  }).format(amount);
}

export function summarizeTransactions(transactions: TransactionItem[]) {
  return transactions.reduce(
    (summary, txn) => {
      if (txn.type === "credit") {
        summary.inflow += txn.amount;
      } else {
        summary.outflow += txn.amount;
      }
      return summary;
    },
    { inflow: 0, outflow: 0 }
  );
}
