import { React } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView} from 'react-native';

import Details from './Details'
import Purchase from './Purchase';

export default function Diesel({navigation}) {

  const price = Number("3250");

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Details price={price}></Details>
        <Purchase navigation={navigation} price={price} />
      </KeyboardAvoidingView>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 6,
      padding: 20,
      backgroundColor: '#fff'
    }
  })
