import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DillPay</Text>
      <Text style={styles.tagline}>Where Love Meets Financial Growth.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background
  },
  logo: {
    fontSize: 36,
    fontWeight: "700",
    color: colors.primary
  },
  tagline: {
    marginTop: 12,
    fontSize: 14,
    color: colors.textSecondary
  }
});
