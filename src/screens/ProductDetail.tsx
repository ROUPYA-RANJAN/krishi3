import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from 'expo-linear-gradient'; // For gradient buttons

const ProductDetail = (props: { route: any; navigation: any }) => {
  const { route, navigation } = props; // Destructure route and navigation from props
  
  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      price: 35,
      quantity: 500,
      description: "Fresh, juicy tomatoes sourced from the local farms of Maharashtra.",
      image: require("../../assets/products/tomatoes.jpg"),
      seller: {
        id: 123,
        name: "Kashmir Valley Farms",
        location: "Bengaluru, Karnataka",
        rating: 4.5,
        reviews: 50,
      },
    },
    {
      id: 2,
      name: "Sweet Corn",
      price: 25,
      quantity: 700,
      description:
        "Fresh corn, directly sourced from Mumbai farms, perfect for a healthy snack.",
      image: require("../../assets/products/corn.jpg"),
      seller: {
        id: 124,
        name: "Green Field Farms",
        location: "Mumbai, Maharashtra",
        rating: 4.2,
        reviews: 35,
      },
    },
    {
      id: 3,
      name: "Organic Apples",
      price: 150,
      quantity: 100,
      description:
        "Fresh organic apples from the orchards of Himachal Pradesh, perfect for a healthy snack.",
      image: require("../../assets/products/apples.jpg"),
      seller: {
        id: 125,
        name: "Urban Greens",
        location: "Shimla, Himachal Pradesh",
        rating: 4.8,
        reviews: 45,
      },
    },
    {
      id: 4,
      name: "Carrots",
      price: 40,
      quantity: 400,
      description: "Sweet, organic carrots from the fields of Punjab.",
      image: require("../../assets/products/carrots.jpg"),
      seller: {
        id: 126,
        name: "Pure Veggie Farms",
        location: "Delhi, Delhi",
        rating: 4.1,
        reviews: 60,
      },
    },
    {
      id: 5,
      name: "Potatoes",
      price: 20,
      quantity: 500,
      description: "Locally grown potatoes from the heartland of Uttar Pradesh.",
      image: require("../../assets/products/potatoes.jpg"),
      seller: {
        id: 127,
        name: "AgriWorld Farms",
        location: "Pune, Maharashtra",
        rating: 4.0,
        reviews: 30,
      },
    },
    {
      id: 6,
      name: "Basmati Rice",
      price: 90,
      quantity: 350,
      description: "Fresh basmati rice from the cool highlands of Ooty.",
      image: require("../../assets/products/rice.jpg"),
      seller: {
        id: 128,
        name: "Ooty Organic Farms",
        location: "Amritsar, Punjab",
        rating: 4.9,
        reviews: 40,
      },
    },
    {
      id: 7,
      name: "Fresh Mangoes",
      price: 200,
      quantity: 450,
      description: "Fresh mangoes sourced from the farms of Ratnagiri, Maharashtra.",
      image: require("../../assets/products/mangoes.jpg"),
      seller: {
        id: 129,
        name: "Fresh Harvest",
        location: "Ratnagiri, Maharashtra",
        rating: 5.0,
        reviews: 55,
      },
    },
  ];

  const { id } = route.params;  // Get the product ID from the route
  const product = products.find((item) => item.id === id);  // Find the product by ID

  if (!product) {
    return <Text>Product not found!</Text>;  // Handle case if product is not found
  }

  const handleAddToCart = () => {
    navigation.navigate('Cart', { product });
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>Price: ₹{product.price}/kg</Text>
        <Text style={styles.quantity}>Available: {product.quantity} kg</Text>
        <Text style={styles.description}>{product.description}</Text>

        {/* Seller Info */}
        <View style={styles.sellerContainer}>
          <Text style={styles.seller}>Seller: {product.seller.name}</Text>
          <Text style={styles.sellerLocation}>Location: {product.seller.location}</Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={16} color="#f39c12" />
            <Text style={styles.ratingValue}>{product.seller.rating} ({product.seller.reviews} reviews)</Text>
          </View>
        </View>

        {/* Buttons Row */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cart")}>
            <LinearGradient colors={['#4CAF50', '#8BC34A']} style={styles.gradientButton}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Chat")}>
            <LinearGradient colors={['#ff6347', '#FF4500']} style={styles.gradientButton}>
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
