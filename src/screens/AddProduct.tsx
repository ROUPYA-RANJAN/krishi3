import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';  // Import the icon

const AddProduct: React.FC = () => {
  const [category, setCategory] = useState<string>(''); // Category selected by user
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [productQuantity, setProductQuantity] = useState<string>('');
  const [imageUri, setImageUri] = useState<string | null>(null); // Image URI

  const handleAddProduct = () => {
    if (!productName.trim() || !productPrice.trim() || !productQuantity.trim()) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    // Handle product addition logic here
    Alert.alert(
      'Success',
      `${productName} has been added with a price of ₹${productPrice} and quantity ${productQuantity}`
    );

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Removed the Add New Product text */}
      
      {/* Changed Category: name to Product Category: name and moved it to the top */}
      {category && (
        <Text style={styles.subHeader}>Product Category: {category.charAt(0).toUpperCase() + category.slice(1)}</Text>
      )}

      {/* Show category images if no category has been selected */}
      {!category && (
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

      {/* Once a category is selected, show the form */}
      {category && (
        <>
          <TextInput
            style={styles.input}
            placeholder={`Enter ${category} name`}
            value={productName}
            onChangeText={setProductName}
          />

          {/* Added a camera icon beside Add Picture button */}
          <TouchableOpacity style={styles.addPictureButton} onPress={pickImage}>
            <MaterialIcons name="camera-alt" size={20} color="white" />
            <Text style={styles.addPictureText}> Add Picture</Text>
          </TouchableOpacity>

          {/* Enlarged image container with more padding */}
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}

          <TextInput
            style={styles.input}
            placeholder={`Enter price per ${category === 'dairy' ? 'litre' : category === 'grains' ? '100 grams' : 'kg'}`}
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

          <Button title="Add Product" onPress={handleAddProduct} color="#4CAF50" />
        </>
      )}
    </ScrollView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20, // Increased margin to move it to the top
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  image: {
    width: 190, // Increased size
    height: 190, // Increased size
    borderRadius: 10,
    marginBottom: 20, // Added more margin for space between Add Picture and Enter price
    alignSelf: 'center',
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
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  categoryLabel: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  addPictureButton: {
    flexDirection: 'row',  // To align icon and text in a row
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,  // Added space after the Add Picture button
  },
  addPictureText: {
    color: 'white',
    marginLeft: 10, // Space between the icon and text
  },
});
