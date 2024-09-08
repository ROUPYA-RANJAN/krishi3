import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface NavProps {
  navigation: any;
  isLoggedIn: boolean;
}

export default function Nav({ navigation }: NavProps) {
  const isLoggedIn = true; // Temporarily set to true for testing
  return (
    <View style={styles.nav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
        accessibilityLabel="Go to Home"
      >
        <MaterialIcons name="home" size={30} color="black" />
        <Text style={styles.title}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Products")}
        accessibilityLabel="View Products"
      >
        <MaterialIcons name="grass" size={30} color="black" />
        <Text style={styles.title}>Products</Text>
      </TouchableOpacity>

     

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("AddProduct")}
        accessibilityLabel="Add Product"
      >
        <MaterialIcons name="add-box" size={30} color="black" />
        <Text style={styles.title}>Add Item</Text>
      </TouchableOpacity>

      {isLoggedIn && (
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Profile")}
          accessibilityLabel="View Profile"
        >
          <MaterialIcons name="person" size={30} color="black" />
          <Text style={styles.title}>My Profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    borderRadius: 20,
    paddingVertical: Platform.OS === 'ios' ? 10 : 5,
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: Platform.OS === 'ios' ? 70 : 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    marginTop: 2,
    fontWeight: "700",
    color: "#333",
  },
});
