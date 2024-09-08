import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Nav from "../components/Nav";
import productsData from "../data/productsData"; // Assuming this data is properly imported
import categoriesData from "../data/categoriesData"; // Assuming this data is properly imported

export default function Home({ navigation }: { navigation: any }) {
  const [search, setSearch] = useState("");

  // Filter products based on search
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderProductCard = ({ item }: { item: any }) => (
    <ProductCard product={item} />
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity style={styles.cartButton} 
          
          onPress={() => navigation.navigate("Cart")}
          accessibilityLabel="View Cart"
        >
          <MaterialIcons name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* ScrollView for Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories Section */}
        <View style={styles.wrapper}>
          <Text style={styles.subTitle}>Categories</Text>
          <View style={styles.categoriesGrid}>
            {categoriesData.map((data) => (
              <Categories key={data.id} data={data} navigation={navigation} />
            ))}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Products")}
          >
            <Text style={styles.buttonText}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Products Section */}
        <View style={styles.productSection}>
          <View style={styles.productsHeader}>
            <Text style={styles.sectionTitle}>Products Near You</Text>
            <TouchableOpacity style={styles.sortButton}>
              <MaterialIcons name="sort" size={20} color="white" />
              <Text style={styles.sortButtonText }>Sort by Location</Text>
            </TouchableOpacity>
          </View>

          {/* FlatList for Products */}
          <FlatList
            data={filteredProducts.sort((a, b) =>
              a.location.localeCompare(b.location)
            )}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id.toString()} // Convert id to string
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      <Nav navigation={navigation} isLoggedIn={false} />
    </View>
  );
}

function Categories({ data, navigation }: { data: any; navigation: any }) {
  return (
    <TouchableOpacity
      style={styles.categoryButton}
      onPress={() => navigation.navigate("Products", { categoryId: data.id })}
    >
      <Image style={styles.categoryIcon} source={data.image} />
      <Text style={styles.categoryText}>{data.name}</Text>
    </TouchableOpacity>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <View style={styles.productCard}>
      <Image style={styles.productImage} source={product.image} />
      <View style={styles.productDetails}>
        <Text style={styles.productName} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.productLocation}>{product.location}</Text>
        <Text style={styles.productDate}>Posted on: {product.date}</Text>
        <Text style={styles.productPrice}>₹{product.price}</Text>
      </View>
      <TouchableOpacity style={styles.likeButton}>
        <MaterialIcons name="favorite-border" size={24} color="red" />
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    paddingTop: 10,
    
    
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "94%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft:10,
    marginRight: 20,
    alignContent:"center",
  
    
    backgroundColor: "#2874F0",
    borderRadius: 17,
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
borderRadius: 20,
},
  searchInput: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
    fontWeight:"400",
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    fontSize: 16,
  },
  cartButton: {
    padding: 10,
    backgroundColor: "#35C759",
    borderRadius: 20,
  },
  content: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
  },
  wrapper: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subTitle: {
   
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 15,
    textAlign: "left",
    width: "100%",
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",  //space-between
  },
  categoryButton: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#DDD",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 40,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  productSection: {
    marginTop: 10,
  },
  productsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  alignItems: "center",
  
  width: "90%",
   marginLeft: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#333",
  },
  sortButton: {
    backgroundColor: "#2874F0",
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginLeft:10,
  },
  sortButtonText: {
    color: "#FFF",
    fontSize:12,
    fontWeight: "600",
    marginLeft: 5,
  },
  productCard: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft:10,
    padding:5,
    width:"95%",
    marginLeft: 10,
   

    marginBottom: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  productDetails: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 0,
    color: "#333",
  },
  productLocation: {
    fontSize: 14,
    flexDirection: "row",
    fontWeight: "500",
    color: "#777",
  },
  productDate: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E91E63",
    marginTop: 5,
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin:10,
  },
});
