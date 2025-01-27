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
      <SlowList count={defferedCount} />
    </SafeAreaView>
  );
}

const SlowItem = ({ count: text }: SlowItemProps) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 10) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <View style={styles.item}>
      <Text>{text}</Text>
    </View>
  );
};

const SlowList = memo(({ count }: SlowListProps) => {
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");

  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} count={count} />);
  }

  return (
    <ScrollView style={styles.list}>
      <View style={styles.listContainer}>{items}</View>
    </ScrollView>
  );
});

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
