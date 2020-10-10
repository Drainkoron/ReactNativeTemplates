import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const TasksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tasks</Text>
    </View>
  );
}

TasksScreen.navigationOptions = {
  headerTitle: 'Tasks',
  /*
  headerStyle: {
    backgroundColor: 'red',
  },
  headerTintColr: '#fff'
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
