import { React } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import FuelDetails from '../components/FuelDetails';
import PurchaseForm from '../components/PurchaseForm';

export default function PetrolTab({navigation}) {

    const price = Number("2994");

    return (
      <KeyboardAvoidingView style={styles.container}>
        <FuelDetails price={price}/>
        <PurchaseForm navigation={navigation} price={price} />
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