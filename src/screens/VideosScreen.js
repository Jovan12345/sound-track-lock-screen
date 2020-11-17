import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import youtubeApi from '../api/youtube';
import YouTube from 'react-native-youtube';

const KEY = 'AIzaSyDrS6aoqJK0t4-JNQsBwwG1keWLJZUnRm4'

export default function Videos() {
    const [term, setTerm] = useState('')
    const [videoId, setVideoId] = useState('')
    const [playVideo, setPlayVideo] = useState(false)

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

        setVideoId(response.data.items[0].id.videoId)
        setTerm('')
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <View style={styles.container}>
                <View>
                    {
                        videoId ?
                            <YouTube
                                apiKey={KEY}
                                play={playVideo}
                                videoId={videoId}
                                fullscreen={false}
                                controls={1}
                                loop={false}
                                onError={e => console.log('Error', e)}
                                style={{ alignSelf: 'stretch', height: 300 }}
                            />
                            :
                            null
                    }
                </View>
                <Text style={styles.textStyle}>Search videos</Text>
                <TextInput value={term} placeholder="Search Video" onChangeText={setTerm} />
                <Button title="Search" onPress={() => onTermSubmit(term)} />
                <TouchableOpacity onPress={() => setPlayVideo(!playVideo)} style={{ paddingVertical: 10, alignSelf: 'center', backgroundColor: 'skyblue' }}>
                    <Text>Start music</Text>
                </TouchableOpacity>

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
