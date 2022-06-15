import { React, useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';


export default function PurchaseForm({navigation, price}) {

  const [amount, setAmount] = useState('');
  const [fuelAmount, setFuelAmount] = useState(0.00);
  const Warning = <Text>Fuel amount should 1 or more!</Text>

  const handleChange = () => {

    const litres = amount/price;
    console.log(litres)
    return litres

  }

  useEffect(() => {

    setFuelAmount(handleChange);

  }, [amount]);

    return (

          <View style={styles.form}>

            
            <Text
              style={styles.title}
            >Enter Amount (TZS)</Text>

            <TextInput
              style={styles.input}
              placeholder='Enter Amount (TZS)'
              value={amount}
              onChangeText={number => setAmount(number)}
              keyboardType={'number-pad'}
            />

            {/* {handleChange < 1.00 &&
            
              <Text>Fuel amount should 1 or more!</Text>
            } */}

            <View style={styles.litresWrapper}>
              
              <Text style={styles.litreText}>Amount in Litres</Text>
              <Text style={styles.litreAmount}>{fuelAmount.toFixed(3)}</Text>

            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => navigation.navigate('Payment')}
            >

                <Text style={styles.textButton}>Pay Now</Text>
            </TouchableOpacity>

          </View>
    );
  }

  const styles = StyleSheet.create({
    form: {
      flex:4,
      // alignItems: 'stretch',
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      // padding: 10
    },
    input: {
      backgroundColor: '#e7ecef',
      height: 50,
      borderRadius: 10,
      padding: 10,
    },
    title: {
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
