import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function PaymentHistory() {
  // Example data
  const data = {
    weekly: {
      expenditure: 200,
      sales: 500,
    },
    monthly: {
      expenditure: 800,
      sales: 2200,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Payment History</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Overview</Text>
        <View style={styles.cardContent}>
          <View style={styles.infoBox}>
            <MaterialIcons name="attach-money" size={30} color="white" style={styles.icon} />
            <Text style={styles.infoText}>Expenditure: ${data.weekly.expenditure}</Text>
          </View>
          <View style={styles.infoBox}>
            <MaterialIcons name="show-chart" size={30} color="white" style={styles.icon} />
            <Text style={styles.infoText}>Sales: ${data.weekly.sales}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Monthly Overview</Text>
        <View style={styles.cardContent}>
          <View style={styles.infoBox}>
            <MaterialIcons name="attach-money" size={30} color="white" style={styles.icon} />
            <Text style={styles.infoText}>Expenditure: ${data.monthly.expenditure}</Text>
          </View>
          <View style={styles.infoBox}>
            <MaterialIcons name="show-chart" size={30} color="white" style={styles.icon} />
            <Text style={styles.infoText}>Sales: ${data.monthly.sales}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBox: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
