import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../theme/colors";

interface PrimaryButtonProps {
  label: string;
  onPress?: () => void;
}

export function PrimaryButton({ label, onPress }: PrimaryButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center"
  },
  text: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: "600"
  }
});
