import { React } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import { Formik } from 'formik';

import Details from './Details'
import Purchase from './Purchase';

export default function Petrol({navigation}) {

    const price = '3,500';

    return (
      <View>
        <Details price={price}/>
        <Purchase navigation={navigation}/>
      </View>
    );
  }