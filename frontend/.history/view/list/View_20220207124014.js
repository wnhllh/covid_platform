import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class List extends Component {
    render() {
        return (
            <View>
                <Text>Map</Text>
            </View>
        )
    }

    componentDidMount() {
        alert("hi")
    }
}