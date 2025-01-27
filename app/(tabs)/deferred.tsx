import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { useDeferredValue, useState, memo } from "react";

interface SlowItemProps {
  count: number;
}

interface SlowListProps {
  count: number;
}

function DeferredScreen() {
  const [count, setCount] = useState(0);
  const defferedCount = useDeferredValue(count);

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => setCount(x => x + 1)} title="Increase" />
      <Text>{count}</Text>
      <SlowItem count={defferedCount} />
    </SafeAreaView>
  );
}

const SlowItem = ({ count: text }: SlowItemProps) => {
  let startTime = performance.now();
  // Simulate a slow render process by blocking for 200ms.
  while (performance.now() - startTime < 200) {
    // Note: Rendering times above 300ms can cause noticeable button interaction lag.
  }

  return (
    <View style={styles.item}>
      <Text>{text}</Text>
    </View>
  );
};

export default DeferredScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  list: {
    flex: 1,
  },
  listContainer: {
    padding: 8,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
