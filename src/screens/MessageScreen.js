import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Message</Text>
    </View>
  );
}

MessageScreen.navigationOptions = {
  headerTitle: 'Message',
  
  headerStyle: {
    backgroundColor: 'lime',
  },
  headerTintColr: '#fff'
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
