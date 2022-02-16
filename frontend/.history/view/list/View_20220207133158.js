import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'

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
            <ScrollView>
                {this.state.list.map((item, index) => {
                    return (
                        <View style={styles.item}>
                            <View style={styles.subitem}>
                            <Text style={styles.name}>{item.title}</Text>
                            <Image 
                                source={{uri: item.imgUrl}} 
                                style={styles.icon}
                            />
                            </View>

                            <View style={styles.info}>
                            <Text style={styles.review}>{item.desc}</Text>
                            <View><Text style={styles.rating}>★★★★☆</Text></View>
                            </View>
                        </View>
                )})}
            </ScrollView>
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

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10
    },
    subitem: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10
        // backgroundColor: '#ffffff'
    },
    icon: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        width: 50,
        height: 50
    },
    info:{
        // flex: 1
 /
    },
    name: {
        lineHeight: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    review: {
        lineHeight: 20,
        marginLeft: 10,
        fontFamily: 'Verdana',
        fontSize: 12,
        marginTop: 10,
        marginBottom: 10
    }
})