import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const AddProduct: React.FC = () => {
  const [category, setCategory] = useState<string>(''); // Category selected by user
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [productQuantity, setProductQuantity] = useState<string>('');
  const [imageUri, setImageUri] = useState<string | null>(null); // Image URI
  const [products, setProducts] = useState<any[]>([]); // Array to store added products

  const handleAddProduct = () => {
    if (!productName.trim() || !productPrice.trim() || !productQuantity.trim()) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    const newProduct = {
      id: Math.random().toString(),
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      image: imageUri,
      category,
    };

    // Add the new product to the array
    setProducts((prevProducts) => [...prevProducts, newProduct]);

    Alert.alert('Success', `${productName} has been added.`);

    // Clear input fields after adding product
    setCategory('');
    setProductName('');
    setProductPrice('');
    setProductQuantity('');
    setImageUri(null);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // Set the selected image URI
    }
  };

  const handleRemoveProduct = (id: string) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
    Alert.alert('Success', 'Product removed.');
  };

  const renderProduct = ({ item }: { item: any }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
        <Text style={styles.productQuantity}>Qty: {item.quantity}</Text>
        <Text style={styles.productCategory}>Category: {item.category}</Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveProduct(item.id)} style={styles.removeButton}>
        <Ionicons name="trash-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Add New Product</Text>

      {/* Category Section */}
      {category ? (
        <Text style={styles.subHeader}>Product Category: {category.charAt(0).toUpperCase() + category.slice(1)}</Text>
      ) : (
        <View style={styles.categoryImages}>
          <TouchableOpacity onPress={() => setCategory('fruit')} style={styles.categoryContainer}>
            <Image source={require('../../assets/categories/fruits.jpeg')} style={styles.categoryImage} />
            <Text style={styles.categoryLabel}>Fruit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCategory('vegetable')} style={styles.categoryContainer}>
            <Image source={require('../../assets/categories/vegetables.jpeg')} style={styles.categoryImage} />
            <Text style={styles.categoryLabel}>Vegetable</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCategory('grains')} style={styles.categoryContainer}>
            <Image source={require('../../assets/categories/grains.jpeg')} style={styles.categoryImage} />
            <Text style={styles.categoryLabel}>Grains</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCategory('dairy')} style={styles.categoryContainer}>
            <Image source={require('../../assets/categories/dairy.jpeg')} style={styles.categoryImage} />
            <Text style={styles.categoryLabel}>Dairy</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Form Section */}
      {category && (
        <>
          <TextInput
            style={styles.input}
            placeholder={`Enter ${category} name`}
            value={productName}
            onChangeText={setProductName}
          />

          <TouchableOpacity style={styles.addPictureButton} onPress={pickImage}>
            <MaterialIcons name="camera-alt" size={20} color="white" />
            <Text style={styles.addPictureText}> Add Picture</Text>
          </TouchableOpacity>

          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}

          <TextInput
            style={styles.input}
            placeholder={`Enter price per ${category === 'dairy' ? 'litre' : category === 'grains' ? 'kg' : 'kg'}`}
            value={productPrice}
            onChangeText={setProductPrice}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder={`Enter total ${category === 'dairy' ? 'litres' : 'quantity'} available`}
            value={productQuantity}
            onChangeText={setProductQuantity}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
            <Text style={styles.addButtonText}>Add Product</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Previously Added Products Section */}
      {products.length > 0 && (
        <>
          <Text style={styles.sectionHeader}>Previously Added Products</Text>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.productList}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </ScrollView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#e0f7fa', // Changed background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#004d40',
  },
  input: {
    height: 45,
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 12, // Rounded corners
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    elevation: 2, // Shadow for input fields
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: 'center',
    borderColor: '#00796b',
    borderWidth: 1,
  },
  categoryImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryContainer: {
    width: '48%',
    marginBottom: 20,
    borderWidth:1,
    borderRadius: 20, // Rounded corners
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    elevation: 3, // Shadow for category containers
  },
  categoryImage: {
    width: '100%',
    height: 120,
  },
  categoryLabel: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    fontWeight: '600',
    fontSize: 16,
    color: '#00796b',
  },
  addPictureButton: {
    flexDirection: 'row',
    backgroundColor: '#00796b',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3, // Shadow for button
  },
  addPictureText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50', // Green background for Add Product button
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    elevation: 3, // Shadow for button
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796b',
    marginTop: 30,
    marginBottom: 10,
  },
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12, // Rounded corners
    padding: 15,
    marginBottom: 15,
    elevation: 4, // Shadow for product card
    position: 'relative',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 12, // Rounded corners
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#4CAF50',
    marginTop: 5,
  },
  productQuantity: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  removeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#d32f2f',
    borderRadius: 50,
    padding: 5,
    elevation: 4, // Shadow for remove button
  },
});
