import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.handleGetListSucc = this.handleGetListSucc.bind(this)
    }

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
        fetch(url)
            .then(res => res.json())
            .then(this.handleGetListSucc)
    }

    handleGetListSucc(res) {
        alert("")
    }
}