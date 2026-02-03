import { View, Text, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { colors } from "../theme/colors";

export function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secure sign in</Text>
      <Text style={styles.subtitle}>Use phone or email to receive a one-time code.</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Phone or Email</Text>
        <View style={styles.inputPlaceholder} />
        <PrimaryButton label="Send OTP" />
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Enter OTP</Text>
        <View style={styles.inputPlaceholder} />
        <PrimaryButton label="Verify & Continue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
    gap: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    gap: 12
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary
  },
  inputPlaceholder: {
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.accent
  }
});
