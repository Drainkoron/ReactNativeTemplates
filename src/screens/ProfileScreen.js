import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const ProfileScreen = ({navigation}) => {
    const editData = () => {
        navigation.navigate('SetData')
    }

    return (
        <View style={styles.container}>
            <Text>Profile Data</Text>
            <Button title='Edit' onPress={editData}></Button>
        </View>
    );
}

ProfileScreen.navigationOptions = {
    headerTitle: 'Profile'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
