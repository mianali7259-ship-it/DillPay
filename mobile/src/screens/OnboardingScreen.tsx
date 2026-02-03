import { View, Text, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { colors } from "../theme/colors";

export function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>Love, money, and shared goals.</Text>
        <Text style={styles.subtitle}>
          Build a wallet experience that grows together with playful rewards.
        </Text>
      </View>
      <PrimaryButton label="Get Started" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
    backgroundColor: colors.background
  },
  hero: {
    marginTop: 80,
    gap: 12
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.textPrimary
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary
  }
});
