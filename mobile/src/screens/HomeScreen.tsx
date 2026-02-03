import { ScrollView, View, Text, StyleSheet } from "react-native";
import { WalletCard } from "../components/WalletCard";
import { SectionHeader } from "../components/SectionHeader";
import { colors } from "../theme/colors";
import { wallets, recentTransactions } from "../data/mock";
import { formatCurrency } from "../services/wallet";

export function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Good afternoon, Amina" subtitle="You have 2 active goals" />
      <WalletCard
        title={wallets[0].title}
        balance={formatCurrency(wallets[0].balance, wallets[0].currency)}
        subtitle={wallets[0].lastActivity}
      />
      <View style={styles.row}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Couple Streak</Text>
          <Text style={styles.statValue}>7 days</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Rewards</Text>
          <Text style={styles.statValue}>2,450 pts</Text>
        </View>
      </View>
      <SectionHeader title="Recent activity" subtitle="Only non-sensitive items appear here" />
      {recentTransactions.map((txn) => (
        <View key={txn.id} style={styles.transactionCard}>
          <View>
            <Text style={styles.transactionTitle}>{txn.title}</Text>
            <Text style={styles.transactionMeta}>{txn.timestamp}</Text>
          </View>
          <Text
            style={[
              styles.transactionAmount,
              txn.type === "credit" ? styles.credit : styles.debit
            ]}
          >
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
    gap: 16
  },
  row: {
    flexDirection: "row",
    gap: 12
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary
  },
  transactionCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
    fontWeight: "700"
  },
  credit: {
    color: colors.success
  },
  debit: {
    color: colors.error
  }
});
