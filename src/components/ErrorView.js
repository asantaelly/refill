import { StyleSheet, Text } from "react-native"

export const ErrorView = ({error}) => {
    return <Text style={styles.errorText}>{error}</Text>
}

const styles = StyleSheet.create({
    errorText: {
        color: '#930707',
        fontSize: 15,
        fontWeight: '400',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f7d1c8',
        height: 40,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 5,
    }
})