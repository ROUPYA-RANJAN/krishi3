import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { Logo } from "../../assets"; // Ensure the logo path is correct

const { width, height } = Dimensions.get("window"); // Get device width and height for responsive design

export default function Welcome({ navigation }: { navigation: any }) {
  const [isLogin, setIsLogin] = useState(true); // Start with Login screen by default

  return (
    <View style={styles.wrapper}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.card}>
        <Text style={styles.title}>{isLogin ? "Login" : "Create Your Account"}</Text>
        {isLogin ? (
          <Login navigation={navigation} />
        ) : (
          <Signup navigation={navigation} />
        )}
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.switchLink}>{isLogin ? "Sign Up" : "Login"}</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20, // Ensure some padding on the sides
  },
  logo: {
    width: width * 0.35, // Smaller logo size (35% of screen width)
    height: width * 0.35, // Maintain aspect ratio
    marginBottom: 20, // Reduced margin for better spacing
  },
  card: {
    width: "100%", // Full width on mobile
    maxWidth: 380, // Limit width on larger screens
    height: height * 0.7, // Increased card height to take more than half of the screen
    padding: 30, // More padding inside the card
    backgroundColor: "#fff",
    borderRadius: 15, // Rounded corners for card effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 8, // Increased shadow for Android
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28, // Slightly larger title
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },
  switchContainer: {
    marginTop: 25, // Adjusted margin for better spacing
  },
  switchText: {
    fontSize: 16, // Adjusted text size for readability
    color: "#666",
  },
  switchLink: {
    fontWeight: "600",
    color: "#007bff",
    textDecorationLine: "underline",
  },
});
