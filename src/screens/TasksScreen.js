import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Header } from '../components/Header'
import { MAIN_COLOR, SECONDARY_COLOR, FONT_COLOR} from '../../assets/colors'

export const TasksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tasks</Text>
    </View>
  );
}

TasksScreen.navigationOptions = {
  headerTitle: 'Tasks'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    alignItems: 'center',
  },
});
