import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { SECONDARY_COLOR, FONT_COLOR} from '../../assets/colors'

export const Header = (props) => {
    console.log(props)

    return (
    
    <View style={styles.container}>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_COLOR,
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title:{
    fontSize:24,
    color: FONT_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 20,
  }
});
