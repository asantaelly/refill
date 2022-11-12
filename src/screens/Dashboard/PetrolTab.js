import { React, useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux';
import { getFuel } from '../../../store/slices/fuel/fuelActions';
import { Card } from '../../components/Card';
import { Form } from '../../components/Form';


export default function PetrolTab({navigation}) {

  const dispatch = useDispatch();
  const { loading, fuelPayload, error } = useSelector((state) => state.fuel)

  const [fuelType, setFuelType] = useState("petrol");
  const [amount, setAmount] = useState(0);
  const [fuelAmount, setFuelAmount] = useState(0.00);
  const [amountError, setAmountError] = useState(null)

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

    dispatch(getFuel("petrol"))

    // Calculate everytime user type ammount
    setFuelAmount(handleCalculation)

    return function cleanup() {
      setFuelAmount(0.00)
      setFuelType(null)
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
        <Card fuelPayload={fuelPayload}/>


        {/* Purchase Form goes here. */}
        <Form 
          fuelPayload={fuelPayload} 
          amountError={amountError}
          handleSubmit={handleSubmit}
          fuelAmount={fuelAmount}
          amount={amount}
          setAmount={setAmount}
        />

      </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 6,
      padding: 20,
      backgroundColor: '#fff'
    }
  })