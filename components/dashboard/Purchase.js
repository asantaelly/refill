import { React, useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';


export default function Purchase({navigation, price}) {

  const [amount, setAmount] = useState('');
  const [fuelAmount, setFuelAmount] = useState(0.00);


  const handleSubmit = () => {

  }

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
            <ammountError/>

            <Text style={styles.litreText}>Amount of litres = {fuelAmount}</Text>


            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >

                <Text style={styles.textButton}>Submit</Text>
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
    litreText: {
      margin: 10,
      fontSize: 24,
    }
  })
