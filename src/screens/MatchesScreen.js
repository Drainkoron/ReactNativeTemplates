import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const MatchesScreen = ({navigation}) => {
    const Message = () => {
        navigation.navigate('Message')
    }

    return (
        <View style={styles.container}>
            <Text>Matches and Messages</Text>
            <Button title='Message' onPress={Message}></Button>
        </View>
    );
}

MatchesScreen.navigationOptions = {
    headerTitle: 'Matches'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
