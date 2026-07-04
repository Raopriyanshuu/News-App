import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    width: "100%",
    height: 50,
    fontSize: 24,
    fontWeight: "bold"
  },
});
