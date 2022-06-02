import { React } from 'react';
import { View, StyleSheet, Text} from 'react-native';

import Details from './Details'
import Purchase from './Purchase';

export default function Diesel({navigation}) {

  const price = '3,250';

    return (
      <View style={styles.container}>
        <Details price={price}></Details>
        <Purchase navigation={navigation} />
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
