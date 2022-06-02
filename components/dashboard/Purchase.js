import { React } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';


export default function Purchase({navigation}) {

    return (

          <View style={styles.form}>
            <Text
              style={styles.title}
            >Enter Amount (TZS)</Text>

            <TextInput
              style={styles.input}
              placeholder='Enter Amount (TZS)'
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => navigation.navigate('Payment')}
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
    }
  })
