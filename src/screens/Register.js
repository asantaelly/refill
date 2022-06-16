import { useContext, useState } from 'react';
import {
    StyleSheet, Text, View, 
    TextInput, TouchableOpacity  
}   from 'react-native';
import { AuthContext } from '../providers/AuthProvider';


export default function Register({navigation}) {

    const {register, error} = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    return (
      <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.welcomeText}>Hi there!</Text>
            <Text style={styles.welcomeText}>Welcome to our platform.</Text>
          </View>

          { error && <Text style={styles.errorMessage}>{error}</Text> }

          <View style={styles.middleContainer}>

          <TextInput 
              style={styles.input}
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Name"
            />

            <TextInput 
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Email Address"
            />
      
            <TextInput 
              style={styles.input}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
              placeholder="Password"
            />

            <TextInput 
              style={styles.input}
              value={passwordConfirmation}
              onChangeText={text => setPasswordConfirmation(text)}
              secureTextEntry
              placeholder="Confirm Password"
            />
      
            <TouchableOpacity 
              style={styles.signupButton}
              onPress = {() => register(name, email, password, passwordConfirmation)}  
            >
                <Text style={styles.signupText}>Register</Text>
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
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      margin: 5,
      paddingBottom: 20
    },
    middleContainer: {
      flex: 3,
    },
    bottomContainer: {
      flex: 1,
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
    signupButton: {
      margin: 5,
      height: 50,
      backgroundColor: '#000',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signupText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    errorMessage: {
      paddingHorizontal: 8,
      paddingBottom: 3,
      color: 'red',
      fontWeight: 'bold',
    }
  }); 