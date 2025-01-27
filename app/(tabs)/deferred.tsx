import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { useDeferredValue, useState } from "react";
import FastComponent from "@/components/FastComponent";
import SlowComponent from "@/components/SlowComponent";
function DefferedScreen() {
  const [count, setCount] = useState(0);
  const deferredCount = useDeferredValue(count);

  return (
    <SafeAreaView style={styles.container}>
      <FastComponent count={count} />
      <SlowComponent count={deferredCount} />
      {count !== deferredCount && <ActivityIndicator />}
      <Button onPress={() => setCount(count + 1)} title="Increment" />
    </SafeAreaView>
  );
}

export default DefferedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
