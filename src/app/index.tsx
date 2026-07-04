import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { router } from "expo-router";

const SplashScreen = ({}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/lottie-anim.json")}
        autoPlay
        loop
        style={styles.splashScreen}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  splashScreen: {
    height: 300,
    width: 300
  },
});
