import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SectionHeader } from "../components/SectionHeader";
import { colors } from "../theme/colors";

const games = [
  {
    title: "Daily Love Quest",
    description: "Complete 3 thoughtful tasks and earn 20 points."
  },
  {
    title: "Budget Duo",
    description: "Solve a savings puzzle together to unlock badges."
  },
  {
    title: "Memory Match",
    description: "Recall shared goals to keep your streak alive."
  }
];

export function GamesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Couple Games" subtitle="Play, bond, and earn rewards" />
      {games.map((game) => (
        <View key={game.title} style={styles.card}>
          <Text style={styles.cardTitle}>{game.title}</Text>
          <Text style={styles.cardBody}>{game.description}</Text>
        </View>
      ))}
      <View style={styles.cardHighlight}>
        <Text style={styles.cardTitle}>7-day streak</Text>
        <Text style={styles.cardBody}>Keep it going to unlock a shared badge.</Text>
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
    gap: 12
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    gap: 8
  },
  cardHighlight: {
    backgroundColor: colors.primarySoft,
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
