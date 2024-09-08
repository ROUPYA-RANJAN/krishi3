import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Get device width and height for responsive design

export default function Login({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if ((email || phone) && password) {
      navigation.navigate("Home"); // Navigate to Home on successful input
    } else {
      setError("Please enter either an email or phone number, and a password.");
    }
  };

  return (
    <View style={styles.container}>
      

      <TextInput
        style={[styles.input, styles.shadow]}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
      />

      <Text style={styles.orText}>OR</Text>

      <TextInput
        style={[styles.input, styles.shadow]}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholderTextColor="#888"
      />

      <TextInput
        style={[styles.input, styles.shadow]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={[styles.loginButton, styles.shadow]} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Center content horizontally
    padding: 19, // Adjusted padding for better spacing
    backgroundColor: "#f9f9f9", 
    borderRadius: 15,
  },
  title: {
    fontSize: 28, // Adjusted for consistency with Welcome screen
    fontWeight: "700",
    color: "#333", // Consistent dark color
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: "#00796b", // Consistent with button color for a uniform look
    borderWidth: 1,
    borderRadius: 12, // More rounded corners for input fields
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    width: width * 0.8, // Dynamic width based on screen size
    maxWidth: 400, // Restrict max width for larger screens
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    color: "#666", // Consistent secondary color
  },
  loginButton: {
    backgroundColor: "#00796b", // Consistent teal color
    padding: 15,
    borderRadius: 12, // Rounded corners for button
    width: width * 0.8, // Dynamic width for the button
    maxWidth: 400, // Restrict max width on larger screens
    marginTop: 10,
  },
  loginButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  errorText: {
    color: "#d32f2f", // Red color for error text
    marginBottom: 12,
    textAlign: "center",
  },
  shadow: {
    elevation: 5, // Add shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
