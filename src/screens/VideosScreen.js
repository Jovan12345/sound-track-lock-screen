import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import youtube from '../api/youtube';
import SoundPlayer from 'react-native-sound-player'
const KEY = 'AIzaSyDrS6aoqJK0t4-JNQsBwwG1keWLJZUnRm4'


const Videos = () => {
    const [term, setTerm] = useState('')
    // const [youtubeResultVideoId, setYoutubeResult] = useState('')

    // useEffect(() => {

    // }, [input])


    const playSong = (song) => {
        if (song) {
            try {
                SoundPlayer.playSoundFile(song, 'mp3')
            } catch (e) {
                alert('Cannot play the file')
                console.log('cannot play the song ')
            }
        }
        return
    }

    const getInfo = async () => {
        try {
            const info = await SoundPlayer.getInfo()
            console.log('getInfo', info)
        } catch (e) {
            console.log('There is no song playing', e)
        }
    }




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




    return (
        <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Search videos</Text>
                <TextInput value={term} placeholder="Search Video" onChangeText={setTerm} />
                <Button title="Search" onPress={() => {
                    onTermSubmit(term)
                    setTerm('')
                }} />
                <Button title="play music" onPress={() => {
                    playSong('pesna')
                    getInfo()
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


export default Videos