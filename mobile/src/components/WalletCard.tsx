import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../theme/colors";

interface WalletCardProps {
  title: string;
  balance: string;
  subtitle: string;
  tone?: "primary" | "secondary";
}

export function WalletCard({ title, balance, subtitle, tone = "primary" }: WalletCardProps) {
  const gradientColors =
    tone === "primary"
      ? [colors.primary, colors.primarySoft]
      : [colors.secondary, colors.secondarySoft];

  return (
    <LinearGradient colors={gradientColors} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.balance}>{balance}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 20,
    gap: 8
  },
  title: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: "600"
  },
  balance: {
    color: colors.surface,
    fontSize: 28,
    fontWeight: "700"
  },
  subtitle: {
    color: colors.surface,
    fontSize: 14
  }
});
