import { View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { memo } from "react";

interface FastComponentProps {
  count: number;
}
const FastComponent = memo(function FastComponent({
  count,
}: FastComponentProps) {
  return (
    <View style={styles.item}>
      <ThemedText>FAST</ThemedText>
      <ThemedText>{count}</ThemedText>
    </View>
  );
});

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

export default FastComponent;
