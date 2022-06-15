import { React, useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../providers/AuthProvider';


export default function Login ({navigation}) {

    const {login, error } = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
      <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.welcomeText}>Hi there!</Text>
            <Text style={styles.welcomeText}>Welcome back.</Text>
          </View>

          {/* <View> */}
              {error &&
                <Text style={styles.errorMessage}>{error}</Text>
              }
            {/* </View> */}

          <View style={styles.middleContainer}>
            

            <TextInput 
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Email Address"
            />
      
            <TextInput 
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
      
            <TouchableOpacity 
              style={styles.loginButton}
              onPress = {() => login(email, password)}
            >
            <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.signupButton}
              onPress = {() => navigation.navigate('Register')}  
            >
            <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}></View>

      </View>
    );
  
  }

  const styles = StyleSheet.create({

    container: {
      flex:6,
      padding: 20,
      backgroundColor: '#fff'
    },
    welcomeText: {
      fontSize: 40,
      fontWeight: '900'
    },
    topContainer: {
      flex: 2,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      margin: 5,
      paddingBottom: 20
    },
    middleContainer: {
      flex: 2,
    },
    bottomContainer: {
      flex: 2,
    },
    input: {
      backgroundColor: '#fff',
      height: 50,
      margin: 5,
      paddingHorizontal: 15,
      borderRadius: 10,
      borderColor: '#C0C0C0',
      backgroundColor: '#e7ecef'
    },
    loginButton: {
      margin: 5,
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
    },
    signupButton: {
      margin: 5,
      height: 50,
      backgroundColor: '#3a86ff',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    errorMessage: {
      paddingHorizontal: 8,
      paddingBottom: 3,
      color: 'red',
      fontWeight: 'bold',
    }
  }); 
