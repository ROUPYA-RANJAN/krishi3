// App.tsx

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// Import your screens
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import ProductDetail from './src/screens/ProductDetail';
import FarmerProfile from './src/screens/FarmerProfile';
import Cart from './src/screens/Cart';
import Payment from './src/screens/Payment';
import Contact from './src/screens/Contact';
import Products from './src/screens/Products';
import Profile from './src/screens/Profile';

// Define the type for the stack navigator
type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Home: undefined;
  Profile: undefined;
  Products: undefined;
  ProductDetail: { productId: string };
  Cart: undefined;
  Payment: undefined;
  Contact: undefined;
  FarmerProfile: { farmerId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  // Define a custom theme (optional)
  const MyTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />

      <Stack.Navigator
        screenOptions={{
          // Custom header with gradient background and logo
          headerBackground: () => (
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.headerGradient}
              start={[0, 0]}
              end={[1, 1]}
            />
          ),
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            // You can add a custom font here if desired
          },
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: "Kisaan Bazaar",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                <MaterialIcons
                  name="support-agent"
                  size={24}
                  color="#fff"
                  style={styles.contact}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Image
                source={{ uri: 'https://your-logo-url.com/logo.png' }} // Replace with your logo URL or require statement
                style={styles.logo}
                resizeMode="contain"
              />
            ),
          })}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Contact" component={Contact} />
        {/* Uncomment if needed */}
        {/* <Stack.Screen name="FarmerProfile" component={FarmerProfile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerGradient: {
    flex: 1,
  },
  contact: {
    marginRight: 20,
    padding: 4,
    backgroundColor: "#35C759",
    borderRadius: 9999,
  },
  logo: {
    width: 150,
    height: 40,
  },
});
