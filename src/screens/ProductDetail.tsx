import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Vegetables } from "../../assets";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Use Material Icons for rating
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient for gradient buttons

const ProductDetail = ({ navigation }: { navigation: any }) => {
  const products = [
    {
      id: 1,
      name: "Organic Apples",
      price: 120,
      quantity: 100,
      description:
        "Fresh organic apples from the orchards of Himachal Pradesh, perfect for a healthy snack.",
      image: Vegetables,
      seller: {
        id: 123,
        name: "Kashmir Valley Farms",
        location: "Srinagar, Jammu and Kashmir",
        rating: 4.7,
        reviews: 50,
      },
    },
    {
      id: 2,
      name: "Tomatoes",
      price: 30,
      quantity: 500,
      description:
        "Fresh, juicy tomatoes sourced from the local farms of Maharashtra.",
      image: Vegetables,
      seller: {
        id: 124,
        name: "Green Field Farms",
        location: "Pune, Maharashtra",
        rating: 4.5,
        reviews: 35,
      },
    },
    {
      id: 3,
      name: "Lettuce",
      price: 80,
      quantity: 300,
      description: "Crisp and fresh lettuce grown organically in Bangalore.",
      image: Vegetables,
      seller: {
        id: 125,
        name: "Urban Greens",
        location: "Bangalore, Karnataka",
        rating: 4.2,
        reviews: 45,
      },
    },
    {
      id: 4,
      name: "Carrots",
      price: 60,
      quantity: 400,
      description: "Sweet, organic carrots from the fields of Punjab.",
      image: Vegetables,
      seller: {
        id: 126,
        name: "Pure Veggie Farms",
        location: "Ludhiana, Punjab",
        rating: 4.8,
        reviews: 60,
      },
    },
    {
      id: 5,
      name: "Potatoes",
      price: 25,
      quantity: 700,
      description: "Locally grown potatoes from the heartland of Uttar Pradesh.",
      image: Vegetables,
      seller: {
        id: 127,
        name: "AgriWorld Farms",
        location: "Kanpur, Uttar Pradesh",
        rating: 4.1,
        reviews: 30,
      },
    },
    {
      id: 6,
      name: "Cabbage",
      price: 40,
      quantity: 350,
      description: "Fresh cabbage from the cool highlands of Ooty.",
      image: Vegetables,
      seller: {
        id: 128,
        name: "Ooty Organic Farms",
        location: "Ooty, Tamil Nadu",
        rating: 4.4,
        reviews: 40,
      },
    },
    {
      id: 7,
      name: "Spinach",
      price: 50,
      quantity: 450,
      description: "Green leafy spinach from organic farms in Gujarat.",
      image: Vegetables,
      seller: {
        id: 129,
        name: "Fresh Harvest",
        location: "Ahmedabad, Gujarat",
        rating: 4.3,
        reviews: 55,
      },
    },
  ];

  const selectedProduct = products[0]; // Replace with dynamic selection if needed


  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={selectedProduct.image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{selectedProduct.name}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
        <Text style={styles.price}>Price: ₹{selectedProduct.price}</Text>
        <Text style={styles.quantity}>Available: <Text style={styles.availabilityText}>{selectedProduct.quantity} kg</Text></Text>
        <View style={styles.sellerContainer}>
          <Text style={styles.seller}>Sold by:</Text>
          <Text style={styles.sellerName}>{selectedProduct.seller.name}</Text>
          <Text style={styles.sellerLocation}>{selectedProduct.seller.location}</Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={20} color="#f39c12" />
            <Text style={styles.ratingValue}>{selectedProduct.seller.rating}⭐</Text>
          </View>
        </View>

        {/* Buttons Row */}
        <View style={styles.buttonsRow}>
          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cart")}>
            <LinearGradient
              colors={['#4CAF50', '#8BC34A']}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Negotiate Button */}
          <TouchableOpacity style={styles.button} onPress={() => alert("Negotiate Price")}>
            <LinearGradient
              colors={['#ff6347', '#FF4500']}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>Negotiate</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    
  },
  imageContainer: {
    margin: 16,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 7, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "#D0D0D0",
    borderWidth:3,
    borderColor:"#E0E0E0",
    height:"35%",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: "#D0D0D0",
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth:5,
    borderColor:"#d3d3d3",
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    color: "#555",
    lineHeight: 22,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  quantity: {
    fontSize: 18,
    marginBottom: 20,
  },
  availabilityText: {
    fontSize: 18,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  sellerContainer: {
    marginBottom: 20,
  },
  seller: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sellerName: {
    fontSize: 16,
    marginTop: 2,
  },
  sellerLocation: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  ratingValue: {
    fontSize: 16,
    color: "#f39c12",
    marginLeft: 4,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  button: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default ProductDetail;
