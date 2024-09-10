// screens/ChatScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Send } from 'react-native-gifted-chat';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      setMessages([...messages, { id: messages.length.toString(), text }]);
      setText('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type a message"
        />
  
        <TouchableOpacity style={styles.SendButton} onPress={handleSend}>
        <MaterialIcons
          name={"send"}
          size={30}
          color={"#2874F0"}
        />
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  message: {
    backgroundColor: '#DCDCDC',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width:"90%",
    borderWidth:1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius:20,
    backgroundColor: '#D0D0D0',
    margin:10,
    
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor:"#fff",
    marginRight: 10,
    
  },
  SendButton: {
   
    

  },
});

export default ChatScreen;
