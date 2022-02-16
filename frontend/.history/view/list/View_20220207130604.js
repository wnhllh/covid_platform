import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.handleGetListSucc = this.handleGetListSucc.bind(this)
    }

    render() {
        return (
            <View>
                {this.state.list.map((item, index) => {
                    return (
                        <View>
                            <Text>Map</Text>
                    </View>
                    )
                })}
            </View>
        )
    }

    componentDidMount() {
        // alert(this.props.route.params.id)
        let id = this.props.route.params.id
        let url = "http://www.llh.com/api/category.json?id=" + id
        fetch(url)
            .then(res => res.json())
            .then(this.handleGetListSucc)
    }

    handleGetListSucc(res) {
        // alert(JSON.stringify(res.data.list))
        this.setState({
            list: res.data.list
        })
    }
}