import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Functional = () => {
    return (
        <View style={styles.container}>
            <Text>Stateless Function React Native</Text>
        </View>
    )
}

export default Functional

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
