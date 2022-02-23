import React, { Component } from 'react'
import { View, SafeAreaView, Text, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './style';

import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class List extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={styles.mainContainer}>
                <ImageBackground
                    source={require('../')}
                    style={styles.backgroudImage} >
    <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                    <View style={styles.navbar}>
                        <FontAwesome name="chevron-left" color={'white'} size={30}  />
                    </View>
</TouchableOpacity>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{this.props.route.params.venue_name}</Text>
                    </View>

                    <View style={styles.badge}>
                    <View style={styles.infoContainer}>
                        <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.infoTitle}>Operator: </Text>
                                <Text style={styles.infoText}>Test</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.infoTitle}>Hours: </Text>
                                <Text style={styles.infoText}>10AM - 5PM</Text>
                            </View>
                        </View>
                            <View style={{flexDirection: 'column', marginTop: 15}}>
                                <Text style={styles.descText}>Originally a fishing village and market town, Shanghai grew in importance in the 19th century due to both domestic and foreign trade and its favorable port location. The city is a place. </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.locationIcon}>
                        <FontAwesome name='map-marker' color='white' size={25} style={styles.socialIcon}/>
                    </View>
                </View>
                </ImageBackground>
            
            <View style={styles.reviewWrapper}> 
            <View><Text style={{marginBottom:5, marginTop:-10, marginLeft: 25, fontSize:15, fontWeight: 'bold', color: 'black'}}>Reviews</Text></View>
            <View style={{ height: 0, borderTopWidth: 0.75, borderColor: 'black', opacity: 0.5, marginLeft: 20, marginRight: 15 }} />
            <FlatList
                onRefresh={this.props.handleListRefresh}
                refreshing={this.props.refreshing}
                data = {this.props.list}
                keyExtractor = {(item, index) => index} //should be item.id
                renderItem = {({item}) => {
                    return (<TouchableOpacity onPress={() => {this.props.navigation.navigate('Detail', { id: item.user_id })}}>
                    <View style={styles.item}>
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
                        </View>
                        </TouchableOpacity>
                        )
                }}
            />
            </View>
    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Detail', { id: 1 })}}>
    <View style={styles.buttonWrapper}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Check-In</Text>
        </View>
    </View>
    </TouchableOpacity>
        </View>
        )
    }

    componentDidMount() {
        this.props.getListData()
    }
}