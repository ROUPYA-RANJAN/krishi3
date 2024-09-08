import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';

const AddProduct: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    if (!productName.trim() || !productPrice.trim()) {
      Alert.alert('Error', 'Please enter both product name and price');
      return;
    }

    // Handle product addition logic here (e.g., saving product to the backend)
    Alert.alert('Success', `${productName} has been added with a price of ₹${productPrice}`);

    // Clear input fields after adding product
    setProductName('');
    setProductPrice('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add New Product</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={productName}
        onChangeText={setProductName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter product price"
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
      />

      <Button title="Add Product" onPress={handleAddProduct} color="#4CAF50" />
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
});
