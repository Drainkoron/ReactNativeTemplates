import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const MainScreen = ({navigation}) => {
    const goToTasks = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.container}>
            <Text>Profiles</Text>
            <Button title='go to Profile' onPress={goToTasks}></Button>
        </View>
    );
}

MainScreen.navigationOptions = {
    headerTitle: 'Search'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
