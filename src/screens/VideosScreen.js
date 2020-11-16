import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import youtube from '../api/youtube';

const KEY = 'AIzaSyDrS6aoqJK0t4-JNQsBwwG1keWLJZUnRm4'

const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
        params: {
            q: term,
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            key: KEY,
        },
    });

    console.log(response.data.items[0].id.videoId)
}

export default function Videos() {
    const [term, setTerm] = useState('')
    return (
        <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Search videos</Text>
                <TextInput value={term} placeholder="Search Video" onChangeText={setTerm} />
                <Button title="Search" onPress={() => {
                    onTermSubmit(term)
                    setTerm('')
                }} />
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
