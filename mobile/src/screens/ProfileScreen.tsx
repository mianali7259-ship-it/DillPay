import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SectionHeader } from "../components/SectionHeader";
import { colors } from "../theme/colors";

const settings = [
  "Profile & verification",
  "Security + biometrics",
  "Spending limits",
  "Notifications",
  "Connected partners"
];

export function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Profile" subtitle="Manage your account and security" />
      <View style={styles.card}>
        <Text style={styles.name}>Amina Rhodes</Text>
        <Text style={styles.meta}>Couple wallet · Family admin</Text>
      </View>
      {settings.map((item) => (
        <View key={item} style={styles.settingRow}>
          <Text style={styles.settingText}>{item}</Text>
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
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    gap: 4
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary
  },
  meta: {
    fontSize: 13,
    color: colors.textSecondary
  },
  settingRow: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 14
  },
  settingText: {
    fontSize: 14,
    color: colors.textPrimary
  }
});
