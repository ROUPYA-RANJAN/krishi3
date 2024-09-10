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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import categoriesData from "../data/categoriesData";
import productsData from "../data/productsData";
import Nav from "../components/Nav";
import { LinearGradient } from "expo-linear-gradient";

export default function Products({ navigation }: { navigation: any }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [likedProducts, setLikedProducts] = useState<string[]>([]);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const handleLikePress = (id: string) => {
    setLikedProducts((prevLiked) =>
      prevLiked.includes(id)
        ? prevLiked.filter((productId) => productId !== id) // Unlike
        : [...prevLiked, id] // Like
    );
  };

  const filteredProducts = selectedCategory
    ? productsData.filter((product) => product.category === selectedCategory)
    : productsData;

  const renderProductItem = ({ item }: { item: any }) => {
    const isLiked = likedProducts.includes(item.id);

    return (
      <TouchableOpacity
        style={styles.productItemContainer}
        onPress={() => navigation.navigate("ProductDetail", { id: item.id })}
      >
        <Image style={styles.productItemImage} source={item.image} />
        <View style={styles.productItemDetails}>
          <View style={styles.productItemHeader}>
            <Text style={styles.productItemName} numberOfLines={1}>
              {item.name}
            </Text>
            <TouchableOpacity onPress={() => handleLikePress(item.id)}>
              <FontAwesome
                name={isLiked ? "heart" : "heart-o"}
                size={24}
                color={isLiked ? "red" : "gray"}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.productItemPrice}>₹{item.price.toFixed(2)}</Text>
          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesome
                key={index}
                name={index < Math.floor(item.rating || 0) ? "star" : "star-o"}
                size={18}
                color="#FFD700"
              />
            ))}
            <Text style={styles.ratingText}>
              {item.rating ? item.rating.toFixed(1) : "N/A"}
            </Text>
          </View>
          <Text style={styles.productLocation}>{item.location}</Text>
          <Text style={styles.productCategory}>{item.category}</Text>
          {/* Removed productQuantity */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Search Box */}
      <View style={styles.searchBox}>
        <MaterialIcons name="search" size={35} color={"gray"} />
        <TextInput style={styles.input} placeholder="Search for Products..." />
      </View>

      {/* Categories Section */}
      <View style={styles.wrapper}>
        {categoriesData.map((data) => (
          <TouchableOpacity
            key={data.id}
            style={styles.circleWrapper}
            onPress={() => handleCategoryPress(data.name)}
          >
            <LinearGradient
              colors={["#FFDEE9", "#B5FFFC"]}
              style={styles.gradientCircle}
            >
              <Image source={data.image} style={styles.img} />
            </LinearGradient>
            <Text style={styles.textCat}>{data.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Products List */}
      <View style={styles.products}>
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.productListContainer}
        />
      </View>

      <Nav navigation={navigation} isLoggedIn={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    marginTop: 10,
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
    justifyContent: "center",
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
    width: "100%",
    paddingBottom: 20,
  },
  productItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: "#696969",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
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
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
    textTransform: "capitalize",
  },
  productItemPrice: {
    fontSize: 18,
    fontWeight: "bold",
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
