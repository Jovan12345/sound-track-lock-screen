import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

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

    console.log(response)
}

export default function Videos() {
    return (
        <View>
            <Text>Search videos</Text>
            <Button title="Search" onPress={() => onTermSubmit('buildings')} />
        </View>
    )
}

const styles = StyleSheet.create({})
