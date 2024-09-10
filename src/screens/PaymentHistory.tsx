import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function PaymentHistory() {
  // Example data
  const data = {
    weekly: {
      expenditure: 6,
      sales: 5000,
    },
    monthly: {
      expenditure: 20,
      sales: 21000,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Expenditure</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Overview</Text>
        <View style={styles.cardContent}>
          <View style={styles.infoBox}>
           
            <Text style={styles.infoText}>Items sold: {data.weekly.expenditure}</Text>
          </View>
          <View style={styles.infoBox}>
           
            <Text style={styles.infoText}>Sales: ₹{data.weekly.sales}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Monthly Overview</Text>
        <View style={styles.cardContent}>
          <View style={styles.infoBox}>
            
            <Text style={styles.infoText}>Items sold: {data.monthly.expenditure}</Text>
          </View>
          <View style={styles.infoBox}>
          
            <Text style={styles.infoText}>Sales: ₹{data.monthly.sales}</Text>
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
    backgroundColor: '#C8C8C8',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  //  shadowColor: '#000',
  //  shadowOffset: { width: 0, height: 4 },
  //  shadowOpacity: 0.2,
 //   shadowRadius: 8,
  //  elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
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
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    borderWidth:3,
    borderColor:"#696969",
  },
  icon: {
    marginRight: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '600',
  },
});
