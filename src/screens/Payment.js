import { React, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Image, TextInput } from 'react-native';

import airtel from '../../assets/logo/airtelmoney.png';
import tigo from '../../assets/logo/tigopesa.png';
import mpesa from '../../assets/logo/mpesa.png';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';

export default function Payment({route, navigation}) {

  const {data} = route.params;
  const {user} = useContext(AuthContext)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [disabled, setDisabled] = useState(true)

  // User access token
  axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

    const confirmationAlert = () =>
    Alert.alert(
      "Confirm",
      `Send ${data.amount} TZS to Smart Station for ${data.fuelAmount.toFixed(2)} Litre(s) of ${data.fuelType}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: handlePayment(),
        }
      ],
      {
        cancelable: false
      }
    );

    const successAlert = (response) =>
    Alert.alert(
      "Payment was successfully",
      `Your payment of ${data.amount} TZS to Smart Station for ${data.fuelAmount.toFixed(2)} Litre(s) of ${data.fuelType} was successfully`,
      [
        { 
          text: "OK", 
          onPress: navigation.navigate('Receipt', {
            data: data,
            phoneNumber: phoneNumber,
            paymentResponse: response,
          }),
        }
      ],
      {
        cancelable: false
      }
    );

    const handlePayment = () => {
      const paymetData = {
        data,
        user,
        phoneNumber
      }

      axios.post('api/payment', paymetData)
      .then(response => {
        successAlert(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      })

      console.log('Submitting...')
    }

    

    useEffect(() => {
      if(phoneNumber.length === 10) {
        setDisabled(false);
      } else {
        setDisabled(true)
      }

      
    }, [phoneNumber, disabled])

    return (
      <View style={styles.container}>
            <Text style={styles.title}>Payment Method</Text>

            <View style={styles.methodWrapper}>

                <TouchableOpacity style={styles.method}>
                      <Image style={styles.tinyLogo} source={mpesa}/>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.method}>
                      <Image style={styles.tigo} source={tigo}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.method}>
                      <Image style={styles.airtel} source={airtel}/>
                </TouchableOpacity> */}
            </View>

          <View style={styles.form}>
              <Text style={styles.titleAmount}>Enter Vodacom Number</Text>

              <TextInput
                style={styles.input}
                placeholder='0754123456'
                // value={phoneNumber}
                onChangeText={number => setPhoneNumber(number)}
                keyboardType={'number-pad'}
                maxLength={10}
              />

            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={[styles.confirmButton, disabled ? styles.disabledConfirmButton : '']} onPress={confirmationAlert} disabled={disabled}>
                    <Text style={styles.textButton}>Submit Payment</Text>
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
    // method: {
    //     backgroundColor: '#000',
    //     borderRadius: 10,
    //     justifyContent: 'center',
    //     padding: 5,
    //     margin: 5
    // },
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
    disabledConfirmButton: {
       opacity: 0.5,
    },
    textButton: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500'
    },
    tinyLogo: {
        width: 85,
        height: 60
    },
    tigo: {
        width: 80,
        height: 80,
    },
    airtel: {
        width: 80,
        height: 80
    },
    form: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
    },
    input: {
      backgroundColor: '#e7ecef',
      height: 50,
      borderRadius: 10,
      padding: 10,
    },
    titleAmount: {
      fontSize: 16,
      padding: 10,
    },
  })