import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Settings({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.option}>
        <Text style={styles.optionText}>Profile Settings</Text>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.optionButtonText}>Go to Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>App Settings</Text>
        {/* Add more settings options as needed */}
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
  },
  option: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  optionText: {
    fontSize: 18,
    color: "#333",
  },
  optionButton: {
    marginTop: 10,
    backgroundColor: "#33c37d",
    padding: 10,
    borderRadius: 5,
  },
  optionButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});