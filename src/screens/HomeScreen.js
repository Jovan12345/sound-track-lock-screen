import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>SoundTrack App</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: 'grey'
    },
    textStyle: {
        fontSize: 26,
        alignSelf: 'center'
    }
})
