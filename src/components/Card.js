import { View, StyleSheet, Text} from 'react-native';


import 'intl';
import 'intl/locale-data/jsonp/en';


export const Card = ({fuelPayload}) => {
    return (
        <View style={styles.containerWrapper}>
            <View style={styles.info}>
              <View style={styles.currentPrice}>
                <Text style={styles.title}>Price per Litre.</Text>
                <Text style={styles.price}>{ new Intl.NumberFormat().format(fuelPayload.price)} TZS</Text>
              </View>
              <View style={styles.status}>
                { fuelPayload.status ? <Text style={styles.statusButton}>available</Text>: <Text style={styles.statusInactiveButton}>Unavailable</Text>}
              </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerWrapper: {
        flex:2,
        backgroundColor: '#fff',
        padding: 10,
      },
      info: {
        flexDirection: 'row',
        backgroundColor: '#222',
        justifyContent: 'space-between',
        borderRadius: 20,
      },
      title: {
        fontSize: 16,
        fontWeight: '400',
        color: '#d6ccc2'
      },
      price: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff'
      },
      currentPrice: {
        alignContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      status: {
        marginTop: 120,
        padding: 15,
        alignItems: 'center'
      },
      statusButton: { 
        backgroundColor: '#ffb703',
        fontSize: 16,
        borderRadius: 12,
        fontWeight: 'bold',
        padding: 8,
        color: '#fff'
      },
      statusTitle: {
          fontSize: 16,
          fontWeight: '500',
          color: '#d6ccc2',
          paddingBottom: 3
        },
        statusInactiveButton: { 
          backgroundColor: '#8d99ae',
          fontSize: 16,
          borderRadius: 12,
          fontWeight: 'bold',
          padding: 8,
          color: '#000'
        },
})