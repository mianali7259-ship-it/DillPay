import { ScrollView, View, Text, StyleSheet } from "react-native";
import { WalletCard } from "../components/WalletCard";
import { SectionHeader } from "../components/SectionHeader";
import { colors } from "../theme/colors";
import { wallets } from "../data/mock";
import { formatCurrency } from "../services/wallet";

export function WalletScreen() {
  const wallet = wallets[0];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Personal Wallet" subtitle="Your daily balance and actions" />
      <WalletCard
        title={wallet.title}
        balance={formatCurrency(wallet.balance, wallet.currency)}
        subtitle={wallet.lastActivity}
      />
      <View style={styles.actionRow}>
        {[
          "Add Money",
          "Send",
          "Receive",
          "Statements"
        ].map((action) => (
          <View key={action} style={styles.actionPill}>
            <Text style={styles.actionText}>{action}</Text>
          </View>
        ))}
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Wallet rules</Text>
        <Text style={styles.cardBody}>
          Spending limit: PKR 25,000/day · Secure transfers only · 2-step approval on
          large transactions.
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
  actionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12
  },
  actionPill: {
    backgroundColor: colors.surface,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16
  },
  actionText: {
    fontSize: 13,
    color: colors.textPrimary,
    fontWeight: "600"
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary
  },
  cardBody: {
    marginTop: 8,
    fontSize: 14,
    color: colors.textSecondary
  }
});
