import { ScrollView, View, Text, StyleSheet } from "react-native";
import { WalletCard } from "../components/WalletCard";
import { SectionHeader } from "../components/SectionHeader";
import { colors } from "../theme/colors";
import { wallets } from "../data/mock";
import { formatCurrency } from "../services/wallet";

export function CouplesWalletScreen() {
  const wallet = wallets[1];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Couples Wallet" subtitle="Shared goals, shared joy" />
      <WalletCard
        title={wallet.title}
        balance={formatCurrency(wallet.balance, wallet.currency)}
        subtitle="Amina + Jules · Trip fund"
        tone="secondary"
      />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Shared goals</Text>
        <View style={styles.goalRow}>
          <Text style={styles.goalName}>Weekend getaway</Text>
          <Text style={styles.goalAmount}>PKR 34,000 / 60,000</Text>
        </View>
        <View style={styles.goalRow}>
          <Text style={styles.goalName}>Anniversary gift</Text>
          <Text style={styles.goalAmount}>PKR 12,000 / 25,000</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Spending limits</Text>
        <Text style={styles.cardBody}>
          Each partner: PKR 8,000/day · Joint approval above PKR 20,000.
        </Text>
      </View>
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
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    gap: 12
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary
  },
  goalRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  goalName: {
    fontSize: 14,
    color: colors.textPrimary
  },
  goalAmount: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.secondary
  },
  cardBody: {
    fontSize: 14,
    color: colors.textSecondary
  }
});
