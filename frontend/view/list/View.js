import React, { Component } from 'react'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import styles from './style'

const baseUrl = 'http://127.0.0.1:5000';

class List extends Component {
    constructor(props) {
        super(props)
        this.handleListRefresh = this.handleListRefresh.bind(this)
    }

    render() {
        return (
            <FlatList 
                onRefresh={this.handleListRefresh}
                refreshing={this.props.refreshing}
                data = {this.props.list}
                keyExtractor = {(item, index) => index} //should be item.id
                renderItem = {({item}) => {
                    return (<View style={styles.item}>
                            <View style={styles.subitem}>
                            <Image 
                                source={require('../../resource/imgs/banner.png')}
                                // source={{uri: item.imgUrl}} 
                                style={styles.icon}
                            />
                            <Text style={styles.name}>{item.user_id}</Text>
                            <Text style={styles.rating}>★★★☆☆</Text>
                            </View>

                            <View style={styles.info}>
                            <Text style={styles.review}>{item.review}</Text>
                            </View>
                        </View>)
                }} 
            />
        )
    }

    componentDidMount() {
        this.getList()
    }

    // getList() {
    //     // alert(this.props.route.params.id)
    //     let id = this.props.route.params.id
    //     let url = "http://www.llh.com/api/category.json?id=" + "0001"
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(this.props.changeListInfo)
    // }

    getList = async () => {

        await axios.get(`${baseUrl}/review/get`)
        .then((res)=>{ 
          this.props.changeListInfo(res)
      })
    }

    handleListRefresh() {
        this.props.changeRefresh()
        this.getList()
    }
}

const mapState = (state) => {
    return {
        list: state.list.list,
        refreshing: state.list.refreshing
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeListInfo(res) {
            if (res.data) {
                console.log(res.data)
                const action = {
                    type: 'CHANGE_LIST',
                    list: res.data,
                    refreshing: false
                }
                dispatch(action);
            }
        },
        changeRefresh() {
            const action = {
                type: "CHANGE_REFRESH",
                value: true
            }
            dispatch(action);
        }
    }
}

export default connect(mapState, mapDispatch)(List)