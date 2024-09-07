import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Avator } from "../../assets";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Nav from "../components/Nav";


export default function Profile ({navigation}: { navigation :any}) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <MaterialIcons name="person" size={130} color={"white"} style={styles.profileImage} />
        <Text style={styles.profileName}>Subhasish mausa</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsRow}>
          <Text style={styles.detailsLabel}>Email</Text>
          <Text style={styles.detailsValue}>123@example.com</Text>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.detailsLabel}>Location</Text>
          <Text style={styles.detailsValue}>Gothapatana</Text>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.detailsLabel}>Phone</Text>
          <Text style={styles.detailsValue}>(+91)98765-43210</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <Nav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    // padding: 20,
    alignItems: "center",
  },
  profileContainer: {
    marginTop:20,
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#707070',
    marginBottom: 0,
    textAlign:"center",
    verticalAlign: "middle",
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
    borderWidth:3,
    borderColor:"#C8C8C8",
    
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
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});