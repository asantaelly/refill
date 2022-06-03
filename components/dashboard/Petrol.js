import { React } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Formik } from 'formik';

import Details from './Details'
import Purchase from './Purchase';

export default function Petrol({navigation}) {

    const price = Number("2994");

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Details price={price}/>
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