import { React } from 'react';
import { View, StyleSheet, Text} from 'react-native';

import Details from './Details'
import Purchase from './Purchase';

export default function Diesel({navigation}) {

  const price = '3,008';

    return (
      <View>
        <Details price={price}></Details>
        <Purchase navigation={navigation} />
      </View>
      
    );
  }
