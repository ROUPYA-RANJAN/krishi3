import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function PurchaseHistory() {
  // Replace with your actual data fetching logic
  const purchases = [
    { id: 1, item: "Item 1", date: "2024-09-01", amount: "$20" },
    { id: 2, item: "Item 2", date: "2024-09-05", amount: "$30" },
    // Add more purchases here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Purchase History</Text>
      <ScrollView style={styles.list}>
        {purchases.map((purchase) => (
          <View key={purchase.id} style={styles.item}>
            <Text style={styles.itemText}>Item: {purchase.item}</Text>
            <Text style={styles.itemText}>Date: {purchase.date}</Text>
            <Text style={styles.itemText}>Amount: {purchase.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
  },
  list: {
    width: "100%",
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});
