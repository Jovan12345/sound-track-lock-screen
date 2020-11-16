import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import youtubeApi from '../api/youtube';
import YouTube from 'react-native-youtube';

const KEY = 'AIzaSyDrS6aoqJK0t4-JNQsBwwG1keWLJZUnRm4'



export default function Videos() {
    const [term, setTerm] = useState('')
    const [videoId, setVideoId] = useState('')

    const onTermSubmit = async (term) => {
        const response = await youtubeApi.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY,
            },
        });

        // console.log(response.data.items[0].id.videoId)
        setVideoId(response.data.items[0].id.videoId)

        setTerm('')
        // const videoSrc = `https://www.youtube.com/embed/${response.data.items[0].id.videoId}`;
    }

    console.log(videoId)
    return (
        <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <View style={styles.container}>
                {
                    videoId ?
                        <YouTube
                            apiKey={KEY}
                            videoId={videoId}
                            fullscreen={false}
                            controls={1}
                            loop={false}
                            style={{ alignSelf: 'stretch', height: 300 }}
                        /> :
                        null
                }
                <Text style={styles.textStyle}>Search videos</Text>
                <TextInput value={term} placeholder="Search Video" onChangeText={setTerm} />
                <Button title="Search" onPress={() => onTermSubmit(term)} />
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
