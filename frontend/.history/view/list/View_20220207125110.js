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
        // alert(this.props.route.params.id)
        let id = this.props.route.params.id
        url = "http://www.llh.com/api/category.json?id=" + id

        
    }
}