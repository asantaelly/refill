import { React, useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import { AuthContext } from '../providers/AuthProvider';
import axios from "axios";
import 'intl';
import 'intl/locale-data/jsonp/en';


export default function PetrolTab({navigation}) {

    const {user} = useContext(AuthContext)
    const [fuel, setFuel] = useState(null);
    const [loading, setLoading] = useState(true)
    const [fuelType, setFuelType] = useState("petrol");
    const [amount, setAmount] = useState('');
    const [fuelAmount, setFuelAmount] = useState(0.00);
    const [disabled, setDisabled] = useState(true)

    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

     // perform calculation for fuel purchase
     const handleChange = () => {

      if(!fuel) {
          return
      }
      const litres = amount/fuel.price;
      return litres
    }

    useEffect(() => {

      axios.get(`/api/fuel/get/${fuelType}`)
        .then(response => {
          setFuel(response.data)
          setLoading(false)
        })
        .catch(error => {
          console.log(error.response);
        })

        if(fuelAmount >= 1.00) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }

        setFuelAmount(handleChange)


        return function cleanup() {
          setFuelAmount(0.00);
        }

    }, [fuel, amount])

    if(loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large"/>
        </View>
      )
    }

    return (
      <KeyboardAvoidingView style={styles.container}>

        {/* Fuel Details are Displayed here. */}
        <View style={styles.containerWrapper}>
            <View style={styles.info}>
              <View style={styles.currentPrice}>
                <Text style={styles.title}>Price per Litre.</Text>
                <Text style={styles.price}>{ new Intl.NumberFormat().format(fuel.price)} TZS</Text>
              </View>
              <View style={styles.status}>
                { fuel.status ? <Text style={styles.statusButton}>available</Text>: <Text style={styles.statusInactiveButton}>Unavailable</Text>}
              </View>
            </View>
        </View>


        {/* Purchase Form goes here. */}
        <View style={styles.form}>
            <Text style={styles.titleAmount}>Enter Amount (TZS)</Text>

            <TextInput
              style={styles.input}
              placeholder='Enter Amount (TZS)'
              value={amount}
              onChangeText={number => setAmount(number)}
              keyboardType={'number-pad'}
            />

            <View style={styles.litresWrapper}>
              <Text style={styles.litreText}>Amount in Litres</Text>
              <Text style={styles.litreAmount}>{fuelAmount.toFixed(2)}</Text>
            </View>

            <TouchableOpacity
              style={[styles.submitButton, disabled ? styles.submitStatus : '']}
              onPress={() => navigation.navigate('Payment', {
                data: {
                  fuel, fuelAmount, amount, fuelType
                }
              })}
              disabled={disabled}
              >
                <Text style={styles.textButton}>Pay Now</Text>
            </TouchableOpacity>

          </View>
      </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 6,
      padding: 20,
      backgroundColor: '#fff'
    },
    containerWrapper: {
      flex:2,
      backgroundColor: '#fff',
      padding: 10,
    },
    info: {
      flexDirection: 'row',
      backgroundColor: '#222',
      justifyContent: 'space-between',
      borderRadius: 20,
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
      borderRadius: 12,
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
      statusInactiveButton: { 
        backgroundColor: '#8d99ae',
        fontSize: 16,
        borderRadius: 12,
        fontWeight: 'bold',
        padding: 8,
        color: '#000'
      },
      form: {
        flex:4,
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
      submitButton: {
        backgroundColor: '#222',
        height: 50,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10
      },
      submitStatus: {
        backgroundColor: '#777',
      },
      textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
      },
      litresWrapper: {
        flexDirection: 'row',
        paddingVertical: 20
      },
      litreText: {
        margin: 10,
        fontSize: 24,
      },
      litreAmount: {
        fontSize: 24,
        paddingHorizontal: 10,
        margin: 10
      }
  })