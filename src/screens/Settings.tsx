import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function SettingsScreen({ navigation }: { navigation: any }) {
  // List of settings options
  const settingsOptions = [
    { id: '1', title: 'Change Languange', icon: 'edit' , screen: 'Language'},
    { id: '2', title: 'Change Password', icon: 'lock' },
    { id: '3', title: 'Privacy Settings', icon: 'security' },
    { id: '4', title: 'Notifications', icon: 'notifications' },
    { id: '5', title: 'Help & Support', icon: 'help' },
    { id: '6', title: 'Wallet', icon: 'wallet' },
    { id: '7', title: 'Purchase History', icon: 'history', screen: 'PurchaseHistory' },
    { id: '8', title: 'App Theme', icon: 'palette' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {settingsOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.button}
            onPress={() => navigation.navigate(option.screen || option.title)}
          >
            <MaterialIcons name={option.icon} size={30} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#303030',
    borderRadius: 20,
    width: '48%',
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  icon: {
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
