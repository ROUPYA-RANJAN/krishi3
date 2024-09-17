import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SplashImg } from "../../assets"; // Ensure this path is correct

const SplashScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    // Navigate to Welcome screen after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace("Welcome");
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Text style={styles.title}>From Farm to Table</Text>
      <Image style={styles.img} source={SplashImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 200,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#4e4e4e",
  },
  img: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%",
  },
});

export default SplashScreen;
