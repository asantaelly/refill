import { React, useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import axios from "axios";
import 'intl';
import 'intl/locale-data/jsonp/en';
import { useDispatch, useSelector } from 'react-redux';
import { getFuel } from '../../store/slices/fuel/fuelActions';
import { ErrorView } from '../components/ErrorView';


export default function FuelDashboard({navigation, fuelType}) {

  // const fuelType = fuelName;

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user)
  const { loading, fuelPayload, error } = useSelector((state) => state.fuel)

  // const [fuelType, setFuelType] = useState("petrol");
  const [amount, setAmount] = useState(0);
  const [fuelAmount, setFuelAmount] = useState(0.00);
  const [amountError, setAmountError] = useState()

  // perform calculation for fuel purchase
  const handleCalculation = () => {

    if(!fuelPayload){
      return
    }

    const litres = amount/Number(fuelPayload.price);
    return litres;
  }

  // Submit amount
  const handleSubmit = () => {

    if(fuelAmount < 1.00) {
      setAmountError("Fuel should be more than one litre!")
      return
    }

    navigation.navigate('Payment', {
      data: {
        fuelPayload, fuelAmount, amount, fuelType
      }
    })
  }

  useEffect(() => {

    dispatch(getFuel(fuelType))

    // Calculate everytime user type ammount
    setFuelAmount(handleCalculation)

    return function cleanup() {
      setFuelAmount(0.00)
    }

  }, [fuelAmount, amount])

  if(!fuelPayload){
    if(loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large"/>
        </View>
      )
    }
  }

    

    return (
      <KeyboardAvoidingView style={styles.container}>

        {/* Fuel Details are Displayed here. */}
        <View style={styles.containerWrapper}>
            <View style={styles.info}>
              <View style={styles.currentPrice}>
                <Text style={styles.title}>Price per Litre.</Text>
                <Text style={styles.price}>{ new Intl.NumberFormat().format(fuelPayload.price)} TZS</Text>
              </View>
              <View style={styles.status}>
                { fuelPayload.status ? <Text style={styles.statusButton}>available</Text>: <Text style={styles.statusInactiveButton}>Unavailable</Text>}
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
              editable={fuelPayload.status == 0 ? false : true}
              selectTextOnFocus={fuelPayload.status == 0 ? false : true}
            />

            {amountError && <ErrorView error={amountError}/>}

            <View style={styles.litresWrapper}>
              <Text style={styles.litreText}>Amount in Litres</Text>
              <Text style={styles.litreAmount}>{fuelAmount.toFixed(2)}</Text>
            </View>

            <TouchableOpacity
              style={[styles.submitButton]}
              onPress={handleSubmit}
              >
                <Text style={styles.textButton}>Pay</Text>
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
        padding: 15,
        margin: 5
      },
      titleAmount: {
        fontSize: 16,
        padding: 10,
      },
      submitButton: {
        backgroundColor: '#222',
        height: 50,
        marginTop: 20,
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
        paddingVertical: 5
      },
      litreText: {
        margin: 10,
        fontSize: 24,
      },
      litreAmount: {
        fontSize: 24,
        paddingHorizontal: 10,
        margin: 10
      },
      errorStyles: {
        padding: 20,
        backgroundColor: 'red',
        marginTop: 15
      }
  })