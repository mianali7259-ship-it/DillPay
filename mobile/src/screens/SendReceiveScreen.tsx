import { View, Text, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { colors } from "../theme/colors";

export function SendReceiveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send or Receive</Text>
      <Text style={styles.subtitle}>Add a note or emoji to make it personal.</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Recipient</Text>
        <View style={styles.inputPlaceholder} />
        <Text style={styles.label}>Amount</Text>
        <View style={styles.inputPlaceholder} />
        <Text style={styles.label}>Note</Text>
        <View style={styles.inputPlaceholder} />
        <PrimaryButton label="Send securely" />
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Receive money</Text>
        <Text style={styles.body}>Share your QR or paylink with trusted contacts.</Text>
        <PrimaryButton label="Generate QR" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
    backgroundColor: colors.background
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
    fontSize: 13,
    color: colors.textSecondary
  },
  body: {
    fontSize: 14,
    color: colors.textSecondary
  },
  inputPlaceholder: {
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.accent
  }
});
