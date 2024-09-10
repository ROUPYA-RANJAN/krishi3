import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert, ScrollView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Nav from "../components/Nav";

export default function Profile({ navigation }: { navigation: any }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Subhasish Mausa");
  const [email, setEmail] = useState("123@example.com");
  const [location, setLocation] = useState("Gothapatana");
  const [phone, setPhone] = useState("(+91)98765-43210");

  // Constant seller/buyer ID
  const buyerSellerID = "S1245";

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const handleLogoutPress = () => {
    Alert.alert("Logout", "You have been logged out successfully.");
  };

  return (
    <View style={styles.container}>
      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* TouchableOpacity for the settings icon */}
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => navigation.navigate("Settings")}
          accessibilityLabel="Settings"
        >
          <MaterialIcons name="settings" size={40} color={"black"} style={styles.profileImage2} />
        </TouchableOpacity>

        {/* Profile Details */}
        <View style={styles.profileContainer}>
          <MaterialIcons name="person" size={130} color={"white"} style={styles.profileImage} />
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
            />
          ) : (
            <Text style={styles.profileName}>{name}</Text>
          )}
        </View>

        <View style={styles.detailsContainer}>
          {/* Email */}
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Email</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email"
              />
            ) : (
              <Text style={styles.detailsValue}>{email}</Text>
            )}
          </View>

          {/* Location */}
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Location</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
                placeholder="Enter location"
              />
            ) : (
              <Text style={styles.detailsValue}>{location}</Text>
            )}
          </View>

          {/* Phone */}
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Phone</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter phone number"
              />
            ) : (
              <Text style={styles.detailsValue}>{phone}</Text>
            )}
          </View>

          {/* Display constant Seller/Buyer ID */}
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>ID</Text>
            <Text style={styles.detailsValue}>{buyerSellerID}</Text>
          </View>

          {/* Edit Profile Button */}
          <TouchableOpacity style={styles.button} onPress={handleEditPress}>
            <Text style={styles.buttonText}>{isEditing ? "Save Profile" : "Edit Profile"}</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.button2} onPress={handleLogoutPress}>
          <Text style={styles.button2Text}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Navigation Component */}
      <Nav navigation={navigation} isLoggedIn={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileContainer: {
    marginTop: 0,
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#707070",
    marginBottom: 0,
    textAlign: "center",
    verticalAlign: "middle",
  },
  profileImage2: {
    width: 50,
    height: 50,
    borderRadius: 75,
    backgroundColor: "#C8C8C8",
    marginBottom: 0,
    textAlign: "center",
    verticalAlign: "middle",
    marginLeft: 255,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  detailsContainer: {
    backgroundColor: "#E0E0E0",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    borderWidth: 3,
    borderColor: "#C8C8C8",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailsLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },
  detailsValue: {
    fontSize: 16,
    color: "#444",
  },
  button: {
    backgroundColor: "#33c37d",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  button2: {
    backgroundColor: "#EF0107",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  button2Text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    width: "60%",
    borderWidth: 1,
    borderColor: "#C8C8C8",
    fontSize: 16,
    marginBottom: 10,
  },
});
