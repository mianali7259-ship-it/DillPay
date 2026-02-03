import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const layout = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  }
});
