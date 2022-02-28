import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Detail extends Component {

    render() {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        )
    }

    componentDidMount() {
        // console.log(this.props.route.params.id)
    }
}