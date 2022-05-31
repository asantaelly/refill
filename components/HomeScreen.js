import { React } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import Login from './Login';


export default function HomeScreen({navigation}) {

    return (
      <View style={styles.container}>
        <Login navigation={navigation}/>
      </View> 
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7ecef',
      },
  })