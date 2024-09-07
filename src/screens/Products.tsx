import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import categoriesData from "../data/categoriesData";
import { Vegetables, Fruits, Dairy } from "../../assets";
import Nav from "../components/Nav";
import { LinearGradient } from "expo-linear-gradient"; // Importing LinearGradient
import { FontAwesome } from "@expo/vector-icons"; // Importing FontAwesome for star ratings

export default function Products({ navigation }: { navigation: any }) {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Tomatoes",
      price: 40,
      image: Vegetables,
      category: "Vegetables",
      location: "Mumbai, Maharashtra",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Apples",
      price: 120,
      image: Fruits,
      category: "Fruits",
      location: "Shimla, Himachal Pradesh",
      rating: 4.7,
    },
    {
      id: "3",
      name: "Potatoes",
      price: 25,
      image: Vegetables,
      category: "Vegetables",
      location: "Agra, Uttar Pradesh",
      rating: 4.2,
    },
    {
      id: "4",
      name: "Carrots",
      price: 50,
      image: Vegetables,
      category: "Vegetables",
      location: "Nagpur, Maharashtra",
      rating: 4.6,
    },
    {
      id: "5",
      name: "Paneer",
      price: 200,
      image: Dairy,
      category: "Dairy",
      location: "Jaipur, Rajasthan",
      rating: 4.8,
    },
    {
      id: "6",
      name: "Lettuce",
      price: 80,
      image: Vegetables,
      category: "Vegetables",
      location: "Pune, Maharashtra",
      rating: 4.3,
    },
    {
      id: "7",
      name: "Bananas",
      price: 40,
      image: Fruits,
      category: "Fruits",
      location: "Kolkata, West Bengal",
      rating: 4.1,
    },
  ]);

  const Categories = ({ data }: { data: any }) => {
    return (
      <TouchableOpacity style={styles.circleWrapper}>
        <LinearGradient
          colors={["#FFDEE9", "#B5FFFC"]} // Gradient background for categories
          style={styles.gradientCircle}
        >
          <Image source={data.image} style={styles.img} />
        </LinearGradient>
        <Text style={styles.textCat}>{data.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderProductItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.productItemContainer}
      onPress={() => navigation.navigate("ProductDetail")}
    >
      <Image style={styles.productItemImage} source={item.image} />
      <View style={styles.productItemDetails}>
        <View style={styles.productItemHeader}>
          <Text style={styles.productItemName} numberOfLines={1}>
            {item.name}
          </Text>
          <TouchableOpacity style={styles.wishlistButton}>
            <MaterialIcons name="favorite-border" size={30} color="red" />
          </TouchableOpacity>
        </View>
        <Text style={styles.productItemPrice}>₹{item.price.toFixed(2)}</Text>

        {/* Ratings */}
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <FontAwesome
              key={index}
              name={index < Math.floor(item.rating) ? "star" : "star-o"}
              size={18}
              color="#FFD700"
            />
          ))}
          <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
        </View>

        {/* Product Location */}
        <Text style={styles.productLocation}>{item.location}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Box */}
      <View style={styles.searchBox}>
        <MaterialIcons name="search" size={30} color={"gray"} />
        <TextInput style={styles.input} placeholder="Search for Products..." />
      </View>

      {/* Categories Section */}
      <View style={styles.wrapper}>
        {categoriesData.map((data) => (
          <Categories key={data.id} data={data} />
        ))}
      </View>

      {/* Products List */}
      <View style={styles.products}>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.productListContainer}
        />
      </View>

      <Nav navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  products: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    width: "100%",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop:10,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    width: "90%",
    height: 40,
    paddingHorizontal: 10,
    fontSize: 15,
    color: "#000",
  },
  wrapper: {
    width: "55%",
    flexDirection: "row",
    //flexWrap: "wrap",
    justifyContent: "center",
   // borderWidth:3,
   // borderColor:"#989898",
    
  },
  circleWrapper: {
    alignItems: "center",
    marginBottom: 20,
    width: "45%",
  },
  gradientCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  textCat: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    marginTop: 10,
    textAlign: "center",
  },
  productListContainer: {
    paddingBottom: 20,
  },
  productItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#E0E0E0",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth:4,
    borderColor:"#C8C8C8",
    shadowColor: "#efefef",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productItemImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  productItemDetails: {
    marginLeft: 20,
    flex: 1,
  },
  productItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productItemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textTransform: "capitalize",
  },
  productItemPrice: {
    fontSize: 16,
    color: "#35C759",
    marginTop: 5,
  },
  productCategory: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  productLocation: {
    fontSize: 14,
    color: "#555",
    marginTop: 3,
  },
  wishlistButton: {
    marginLeft: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 5,
  },
});
