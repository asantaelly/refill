import { React, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Image, TextInput } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';

export default function Receipt({route, navigation}) {

  const {data, phoneNumber, paymentResponse} = route.params;
  const {user} = useContext(AuthContext)

  axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Payment Information</Text>

        <View style={styles.dataWrapper}>
            <Text style={styles.dataText}>Customer name:      {user.user['name']}</Text>
            <Text style={styles.dataText}>Phone Number:       {phoneNumber}</Text>
            <Text style={styles.dataText}>Fuel Type:                 {data.fuelType.charAt(0).toUpperCase() + data.fuelType.slice(1)}</Text>
            <Text style={styles.dataText}>Fuel Amount:           {data.fuelAmount.toFixed(2)} Litre(s)</Text>
            <Text style={styles.dataText}>Cash Paid:                TZS  {data.amount}/=</Text>
            <Text style={styles.dataText}>Access Token:          1234</Text>
        </View>
        
      </View> 
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 40,
      },
    title: {
        fontSize: 25,
        fontWeight: '500',
    },
    dataWrapper: {
        padding: 40,
        backgroundColor: '#eee'
    },
    dataText: {
        fontSize: 20, 
        fontWeight: '500',
        paddingTop: 5
    }
  })