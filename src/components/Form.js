import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import { ErrorView } from '../components/ErrorView';


export const Form = ({fuelPayload, amountError, amount, setAmount, fuelAmount, handleSubmit}) => {

    return (
        <View style={styles.form}>

            <Text style={styles.titleAmount}>Enter Amount (TZS)</Text>

            <TextInput
                style={styles.input}
                placeholder='Enter Amount (TZS)'
                value={amount}
                onChange={number => setAmount(number)}
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
    )
    
}

const styles = StyleSheet.create({
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
      }
})