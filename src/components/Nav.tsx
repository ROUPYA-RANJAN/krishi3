import { StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity } from 'react-native';

export default function Nav({ navigation }: { navigation: any }) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <MaterialIcons name="home" size={24} color={"black"} />
        <Text style={styles.title}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Products")}
      >
        <MaterialIcons name="grass" size={24} color={"black"} />
        <Text style={styles.title}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Cart")}
      >
        <MaterialIcons name="shopping-cart" size={24} color={"black"} />
        <Text style={styles.title}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <MaterialIcons name="person" size={24} color={"black"} />
        <Text style={styles.title}>My Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    width: "100%",
    position: "absolute",
    bottom: 0, // Keep it pinned at the bottom
    height: Platform.OS === 'ios' ? 70 : 60, // Adjust for iOS/Android
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
    fontSize: 12,
    marginTop: 2,
  },
});
