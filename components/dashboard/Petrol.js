import { React } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import { Formik } from 'formik';

import Details from './Details'
import Purchase from './Purchase';

export default function Petrol({navigation}) {

    const price = '2,994';

    return (
      <View style={styles.container}>
        <Details price={price}/>
        <Purchase navigation={navigation}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 6,
      padding: 20,
      backgroundColor: '#fff'
    }
  })