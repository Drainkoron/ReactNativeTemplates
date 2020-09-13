import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const MainScreen = ({navigation}) => {
    const goToTasks = () => {
        navigation.navigate('Tasks')
    }

    return (
        <View style={styles.container}>
            <Text>Main Screen</Text>
            <Button title='go to Tasks' onPress={goToTasks}></Button>
        </View>
    );
}

MainScreen.navigationOptions = {
    headerTitle: 'Main'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
