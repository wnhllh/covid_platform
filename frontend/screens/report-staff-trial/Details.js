import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import baseUrl from '../../assets/constants/BaseUrl'

// const baseUrl = 'http://127.0.0.1:5000';

function Details(props) {
    const data = props.route.params.data; 
    console.log(data);
    
    const handleDelete = async (item) => {
        console.log(item.id);
        const data = await axios.delete(`${baseUrl}/venue/delete/${item.id}`)
    }

    return (
        <ScrollView>
            <View>
                <Text> {data.item.name}</Text>
                <Text> {data.item.description}</Text>
                <Text> {data.item.created_at}</Text>
            </View>
            <View>
                <Button
                    icon="update"
                    mode="contained"
                    onPress = {() => props.navigation.navigate('Edit', {data: data})}>
                    Edit Venue
                </Button>
                <Button
                    icon="delete"
                    mode="contained"
                    onPress = {() => handleDelete(props.route.params.data.item)}>
                    Delete Venue
                </Button>
            </View>
        </ScrollView>
    )
}

export default Details;