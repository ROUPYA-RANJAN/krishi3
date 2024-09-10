import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

const languages = [
  { name: 'Hindi', icon: 'abugida-devanagari', code: 'hi' },
  { name: 'Telugu', icon: 'translate', code: 'te' },
  { name: 'Tamil', icon: 'car-pickup', code: 'ta' },
  { name: 'English', icon: 'eiffel-tower', code: 'en' },
  { name: 'Bengali', icon: 'bridge', code: 'bn' },
  { name: 'Marathi', icon: 'office-building', code: 'mr' },
  { name: 'Kannada', icon: 'rocket', code: 'kn' },
  { name: 'Odia', icon: 'om', code: 'or' }
];

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <ScrollView>
        {languages.map((language, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedLanguage(language.code)}>
            <ListItem bottomDivider>
              <Icon name={language.icon} type='material-community' />
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: selectedLanguage === language.code ? 'bold' : 'normal' }}>
                  {language.name}
                </ListItem.Title>
              </ListItem.Content>
              {selectedLanguage === language.code && <Icon name='check' type='entypo' color='#517fa4' />}
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff'
  }
});