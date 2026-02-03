import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SectionHeader } from "../components/SectionHeader";
import { colors } from "../theme/colors";

const offers = [
  {
    brand: "Bloom Cafe",
    offer: "8% cashback on shared dates"
  },
  {
    brand: "Sunny Travel",
    offer: "$40 off weekend stays for couples"
  },
  {
    brand: "Fresh Cart",
    offer: "Family grocery bundle + 5x points"
  }
];

export function BrandsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Brand Offers" subtitle="Curated with your goals in mind" />
      {offers.map((offer) => (
        <View key={offer.brand} style={styles.card}>
          <Text style={styles.brand}>{offer.brand}</Text>
          <Text style={styles.offer}>{offer.offer}</Text>
        </View>
      ))}
      <View style={styles.cardAlt}>
        <Text style={styles.brand}>Scan to pay</Text>
        <Text style={styles.offer}>Use QR pay at partner stores and earn points.</Text>
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
  cardAlt: {
    backgroundColor: colors.secondarySoft,
    borderRadius: 18,
    padding: 16,
    gap: 8
  },
  brand: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary
  },
  offer: {
    fontSize: 14,
    color: colors.textSecondary
  }
});
