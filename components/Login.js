import { React } from 'react';
import {
    StyleSheet, Text, View, 
    TextInput, TouchableOpacity  
}   from 'react-native';


export default function Login({navigation}) {

    return (
  
      <View style={styles.loginWrapper}>  
      
        <TextInput 
          style={styles.input}
          placeholder="Email Address"
        />
  
        <TextInput 
          style={styles.input}
          placeholder="Password"
        />
  
        <TouchableOpacity 
          style={styles.loginButton}
          onPress = {() => navigation.navigate('Dashboard')}  
        >
        <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
    </View>
    );
  
  }

  const styles = StyleSheet.create({
    
    loginWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingVertical: 20,
    },
    input: {
      backgroundColor: '#fff',
      height: 50,
      width: 400,
      margin: 5,
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderRadius: 10,
      borderColor: '#C0C0C0'
    },
    loginButton: {
      margin: 5,
      width: 400,
      height: 50,
      backgroundColor: '#000',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    }
  }); 