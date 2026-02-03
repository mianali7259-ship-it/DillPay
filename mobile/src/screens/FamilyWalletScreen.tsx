import { ScrollView, View, Text, StyleSheet } from "react-native";
import { WalletCard } from "../components/WalletCard";
import { SectionHeader } from "../components/SectionHeader";
import { colors } from "../theme/colors";
import { wallets } from "../data/mock";
import { formatCurrency } from "../services/wallet";

export function FamilyWalletScreen() {
  const wallet = wallets[2];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Family Wallet" subtitle="Keep everyone aligned" />
      <WalletCard
        title={wallet.title}
        balance={formatCurrency(wallet.balance, wallet.currency)}
        subtitle="Household budget · 4 members"
        tone="secondary"
      />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Allowance schedule</Text>
        <Text style={styles.cardBody}>
          Every Friday · PKR 4,000 per member · Approval for cash out.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Member permissions</Text>
        <Text style={styles.cardBody}>
          Mia: food & transport · Amir: school + games · Parent approval for &gt;PKR 2,500.
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
    gap: 8
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary
  },
  cardBody: {
    fontSize: 14,
    color: colors.textSecondary
  }
});
