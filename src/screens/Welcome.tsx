import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { Logo } from "../../assets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Welcome() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Image source={Logo} style={styles.img} />
      <View style={styles.container}>
        <View style={styles.signup}>
          <Text
            style={{
              fontSize: isLogin ? 32 : 24,
              fontWeight: "bold",
              marginBottom: 20,
            }}
            onPress={() => setIsLogin(true)}
          >
            Sign Up
          </Text>
          <Signup />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: isLogin ? -340 : 0,
            width: "100%",
            height: 430,
            backgroundColor: "forestgreen",
            paddingBottom: 100,
            gap: 20,
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
          }}
        >
          <Text
            style={{
              fontSize: isLogin ? 24 : 32,
              fontWeight: "bold",
              marginBottom: 20,
              color: "white",
            }}
            onPress={() => setIsLogin(false)}
          >
            Login
          </Text>
          <Login />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 550,
    // borderTopStartRadius: 900 / 5,
  },
  img: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
  signup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingBottom: 70,
    gap: 20,
  },
});