import { React } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Image } from 'react-native';

import airtel from '../assets/logo/airtelmoney.png';
import tigo from '../assets/logo/tigopesa.png';
import mpesa from '../assets/logo/mpesa.png';

export default function PaymentScreen({navigation}) {


    const confirmationAlert = () =>
    Alert.alert(
      "Please Wait...",
      "We are processing your payment.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    return (
      <View style={styles.container}>
          <Text style={styles.title}>Choose Payment Method</Text>

          <View style={styles.methodWrapper}>

              <View style={styles.method}>
                    <Image style={styles.tinyLogo} source={mpesa}/>
              </View>

              <View style={styles.method}>
                    <Image style={styles.tigo} source={tigo}/>
              </View>

              <View style={styles.method}>
                    <Image style={styles.airtel} source={airtel}/>
              </View>
          </View>

        <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmationAlert}>
                <Text style={styles.textButton}>Confirm Payment</Text>
            </TouchableOpacity>
        </View>
          
      </View> 
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 40,
      },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    methodWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 100,
        width: 400,
        padding: 20
    },
    method: {
        height: 100,
        width: 100,
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold'
    },
    buttonWrapper: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    confirmButton: {
        height: 50,
        width: 355,
        backgroundColor: '#000',
        marginTop: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
    },
    tinyLogo: {
        width: 100,
        height: 100
    },
    tigo: {
        width: 90,
        height: 90,
    },
    airtel: {
        width: 85,
        height: 85
    }
  })