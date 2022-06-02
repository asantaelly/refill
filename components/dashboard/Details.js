import { React } from 'react';
import { View, StyleSheet, Text} from 'react-native';


export default function Details(props) {

    return (
      
      <View style={styles.container}>
            <View style={styles.info}>
              <View style={styles.currentPrice}>
                <Text style={styles.title}>Price per Litre.</Text>
                <Text style={styles.price}>{props.price} TZS</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.statusTitle}>Status</Text>
                <Text style={styles.statusButton}>available</Text>
              </View>
            </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:2,
      backgroundColor: '#fff',
      // alignItems: 'stretch',
      padding: 10,
    },
    info: {
      flexDirection: 'row',
      // alignItems: 'flex-start',
      backgroundColor: '#222',
      justifyContent: 'space-between',
      borderRadius: 20,
      // height: 200
    },
    title: {
      fontSize: 16,
      fontWeight: '400',
      color: '#d6ccc2'
    },
    price: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#fff'
    },
    currentPrice: {
      alignContent: 'flex-start',
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    status: {
      marginTop: 120,
      padding: 15,
      alignItems: 'center'
    },
    statusButton: { 
      backgroundColor: '#ffb703',
      fontSize: 16,
      // paddingHorizontal: 15,
      // paddingVertical: 5,
      borderRadius: 12,
      // width: 100,
      // height: 40,
      fontWeight: 'bold',
      padding: 8,
      color: '#fff'
    },
    statusTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#d6ccc2',
        paddingBottom: 3
      },
  })