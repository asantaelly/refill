import { React } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Image } from 'react-native';

import airtel from '../../assets/logo/airtelmoney.png';
import tigo from '../../assets/logo/tigopesa.png';
import mpesa from '../../assets/logo/mpesa.png';

export default function Payment({navigation}) {


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
        { 
          text: "OK", 
          onPress: () => console.log("OK Pressed"),
        }
      ]
    );

    return (
      <View style={styles.container}>
          <Text style={styles.title}>Choose Payment Method</Text>

          <View style={styles.methodWrapper}>

              <TouchableOpacity style={styles.method}>
                    <Image style={styles.tinyLogo} source={mpesa}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.method}>
                    <Image style={styles.tigo} source={tigo}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.method}>
                    <Image style={styles.airtel} source={airtel}/>
              </TouchableOpacity>
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
        flex: 6,
        backgroundColor: '#fff',
        padding: 40,
      },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    methodWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 20
    },
    method: {
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        padding: 5,
        margin: 5
    },
    text: {
        fontWeight: 'bold'
    },
    buttonWrapper: {
        flex: 5,
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#fff',
    },
    confirmButton: {
        height: 50,
        backgroundColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
    },
    textButton: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500'
    },
    tinyLogo: {
        width: 85,
        height: 90
    },
    tigo: {
        width: 80,
        height: 80,
    },
    airtel: {
        width: 80,
        height: 80
    }
  })