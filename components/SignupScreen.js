import { React } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import Signup from './Signup';


export default function SignupScreen({navigation}) {

    return (
      <View style={styles.container}>
        <Signup navigation={navigation}/>
      </View> 
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
  })