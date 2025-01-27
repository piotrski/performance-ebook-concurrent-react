import { memo } from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";

interface SlowComponentProps {
  count: number;
}

const SlowComponent = ({ count }: SlowComponentProps) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 10000) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <View style={styles.item}>
      <ThemedText>SLOW</ThemedText>
      <ThemedText>{count}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

export default memo(SlowComponent);
