import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SectionHeader } from "../components/SectionHeader";
import { colors } from "../theme/colors";
import { recentTransactions } from "../data/mock";
import { formatCurrency } from "../services/wallet";

export function TransactionsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Transactions" subtitle="Every movement is recorded securely" />
      {recentTransactions.map((txn) => (
        <View key={txn.id} style={styles.transactionCard}>
          <View>
            <Text style={styles.transactionTitle}>{txn.title}</Text>
            <Text style={styles.transactionMeta}>{txn.note ?? txn.timestamp}</Text>
          </View>
          <Text style={styles.transactionAmount}>
            {txn.type === "credit" ? "+" : "-"}
            {formatCurrency(txn.amount, txn.currency)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    padding: 20,
    gap: 12
  },
  transactionCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  transactionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textPrimary
  },
  transactionMeta: {
    fontSize: 12,
    color: colors.textSecondary
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary
  }
});
