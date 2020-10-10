import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const ProfileSetDataScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Data to Edit</Text>
    </View>
  );
}

ProfileSetDataScreen.navigationOptions = {
  headerTitle: 'Edit Mode',
  
  headerStyle: {
    backgroundColor: 'red',
  },
  headerTintColr: '#fff'
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
