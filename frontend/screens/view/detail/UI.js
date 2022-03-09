import React, { Component } from 'react'
import { View, StyleSheet, SafeAreaView, Text, Image, FlatList, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { BlurView } from 'expo-blur'
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'

import Animated from 'react-native-reanimated'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import styles from './style';

import StarRating from '../../../components/StarRating';
import BottomSheet from '../../../components/BottomSheet'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { windowHeight, windowWidth } from '../../../assets/constants/Dimensions'

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

import items from '../../../data/boxData'
const data = [{ "created_at": "2022-02-12T19:12:41.434271", "review": "adfsdafs", "user_id": 1, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "good", "user_id": 2, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "average", "user_id": 3, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "ok", "user_id": 4, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "adfsdafs", "user_id": 1, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "good", "user_id": 2, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "average", "user_id": 3, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "ok", "user_id": 4, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "adfsdafs", "user_id": 1, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "good", "user_id": 2, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "average", "user_id": 3, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "ok", "user_id": 4, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "adfsdafs", "user_id": 1, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "good", "user_id": 2, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "average", "user_id": 3, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "ok", "user_id": 4, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "adfsdafs", "user_id": 1, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "good", "user_id": 2, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "average", "user_id": 3, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "ok", "user_id": 4, "venue_id": 4 }];

const ReviewBox = (item) => {
  return (
    <View style={{ borderRadius: 5, margin: 2.5, width: windowWidth / 2 - 7.5, height: (windowWidth / 2 - 7.5) * item.ratio * 0.8 + 120, backgroundColor: 'white' }}>
      <View style={{ borderRadius: 5, margin: 5, width: windowWidth / 2 - 7.5 - 10, height: (windowWidth / 2 - 7.5) * item.ratio * 0.8, backgroundColor: item.color }}></View>
      <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* <View style={{ height: 46, width: 46, borderRadius: 23, backgroundColor: 'white', marginTop: -55, marginLeft: -1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{height: 40, width: 40, borderRadius: 20, }} source={require('../../../assets/images/test.png')} />
        </View> */}
        <View style={{ height: 21, width: windowWidth / 2 - 7.5 - 85, padding: 2.5, borderBottomLeftRadius: 5, backgroundColor: 'rgba(255, 255, 255, 0.5)', marginTop: -25, marginLeft: -5, justifyContent: 'center', alignItems: 'center' }}>
        </View>
        <View style={{ height: 21, width: 75, padding: 2.5, borderBottomRightRadius: 5, backgroundColor: 'rgba(255, 255, 255, 1)', marginTop: -25, marginRight: -5, justifyContent: 'center', alignItems: 'center' }}>
          <StarRating ratings={3} reviews={0} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#2b2b2b', fontSize: 14, fontWeight: 'bold' }}>NAME</Text>
        <Text style={{ color: '#2b2b2b', fontSize: 14, fontWeight: 'bold' }}>21.10.19</Text>
      </View>
      <View style={styles.line}></View>
      <View style={{ marginHorizontal: 7.5, height: 120 }}><Text style={[styles.descText, { color: 'gray' }]}>Originally a fishing village and market town, Shanghai grew in importance in the 19th century due to both domestic and foreign trade. </Text></View>
    </View>
  )
}


export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0),
    }
    this.childFunc = React.createRef();
  }

  getHeaderY() {
    return Animated.interpolateNode(this.state.scrollY, {
      inputRange: [150, 200],
      outputRange: [200, 85],
      extrapolate: 'clamp'
    })
  }

  render() {
    console.log(this.state.scrollY._value)

    return (
      <GestureHandlerRootView style={{}}>

        <View style={{ zIndex: 2 }}>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
            <View style={[styles.backButton, { position: 'absolute', top: 45, left: 20, }]}>
              <Feather name="chevron-left" color="white" size={26}></Feather>
            </View>
          </TouchableOpacity>
        </View>

        {/* subtitle */}
        <AnimatedView
          style={{
            zIndex: 2,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            top: 50,
            left: 55,
            right: 55,
            opacity: Animated.interpolateNode(this.state.scrollY, {
              inputRange: [125, 200],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: Animated.interpolateNode(this.state.scrollY, {
                  inputRange: [125, 200],
                  outputRange: [25, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>{this.props.route.params.venue_name}</Text>
        </AnimatedView>

        <View style={{ zIndex: 3 }}>
          <BottomSheet childFunc={this.childFunc} scrollY={this.state.scrollY.__getValue()} >
            <View style={{}}>
              <TouchableOpacity onPress={this.childFunc.current}>
                <View style={{ backgroundColor: 'gray', marginHorizontal: 10, marginBottom: 15, height: 25, width: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                  <Text style={styles.buttonText}>Reviews</Text>
                </View>
              </TouchableOpacity>
            </View>

            
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  {items
                    .filter((_, index) => index % 2 !== 0)
                    .map((item, index) => (
                      ReviewBox(item)
                    ))}
                </View>
                <View>
                  {items
                    .filter((_, index) => index % 2 === 0)
                    .map((item, index) => (
                      ReviewBox(item)
                    ))}
                </View>
              </View>
            </ScrollView>
          </BottomSheet>
        </View>

        {/* button */}
        <View style={[styles.buttonWrapper]}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail', { id: 1 }), alert(this.getHeaderY()) }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Check-In</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* banner */}
        <AnimatedImageBackground
          style={[{
            height: this.getHeaderY(), zIndex: 1,
            transform: [
              {
                scale: Animated.interpolateNode(this.state.scrollY, {
                  inputRange: [-100, 0],
                  outputRange: [2, 1],
                  extrapolateLeft: 'extend',
                  extrapolate: 'clamp'
                })
              }
            ]
          }, styles.backgroudImage]}
          source={require('../../../assets/images/test.png')}
        >

          <AnimatedBlurView
            tint="dark"
            intensity={500}
            style={{
              ...StyleSheet.absoluteFillObject,
              zIndex: 2,
              opacity: Animated.interpolateNode(this.state.scrollY, {
                inputRange: [150, 200],
                outputRange: [0, 1],
              }),
            }}
          />

        </AnimatedImageBackground>

        {/* title */}
        <Animated.View
          style={{
            zIndex: 2,
            position: 'absolute',
            top: 145,
            left: 20,
            right: 20,
            opacity: Animated.interpolateNode(this.state.scrollY, {
              inputRange: [25, 100],
              outputRange: [1, 0],
            }),
            transform: [
              {
                scale: Animated.interpolateNode(this.state.scrollY, {
                  inputRange: [25, 100],
                  outputRange: [1, 0.75],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateX: Animated.interpolateNode(this.state.scrollY, {
                  inputRange: [25, 100],
                  outputRange: [0, 100],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateY: Animated.interpolateNode(this.state.scrollY, {
                  inputRange: [25, 100],
                  outputRange: [0, -50],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>{this.props.route.params.venue_name}</Text>
        </Animated.View>

        {/* list */}
        {/* <Animated.FlatList
          scrollEventThrottle={16}
          onScroll={Animated.event([{
            nativeEvent: { contentOffset: { y: this.state.scrollY } }
          }])}

          style={{ top: 0 }}
          onRefresh={this.props.handleListRefresh}
          refreshing={this.props.refreshing}
          // data = {this.props.list}
          data={[{ "created_at": "2022-02-12T19:12:41.434271", "review": "adfsdafs", "user_id": 1, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "good", "user_id": 2, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "average", "user_id": 3, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "ok", "user_id": 4, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "adfsdafs", "user_id": 1, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "good", "user_id": 2, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "average", "user_id": 3, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "ok", "user_id": 4, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "adfsdafs", "user_id": 1, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "good", "user_id": 2, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "average", "user_id": 3, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "ok", "user_id": 4, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "adfsdafs", "user_id": 1, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "good", "user_id": 2, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "average", "user_id": 3, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "ok", "user_id": 4, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "adfsdafs", "user_id": 1, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "good", "user_id": 2, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "average", "user_id": 3, "venue_id": 4 }, { "created_at": "2022-02-12T19:12:41.434271", "review": "ok", "user_id": 4, "venue_id": 4 }]}
          keyExtractor={(item, index) => index} //should be item.id
          renderItem={this.renderItem}
        /> */}

        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([{
            
            nativeEvent: { contentOffset: { y: this.state.scrollY } }
          }])}
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: '#f1f1f1' }}
        >
          {/* Description */}
          <View style={[styles.shadow, { paddingVertical: 20, paddingHorizontal: 25, backgroundColor: "white", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }]}>
            <Text style={[styles.descText, { color: 'gray', fontSize: 13 }]}>The park is an open space, dominated by the Washington Square Arch at the northern gateway to the park, with a tradition of celebrating nonconformity. The park's fountain area has long been one of the city's popular spots, and many of the local buildings have at one time served as homes and studios for artists. Many buildings have been built by New York University, while others have been converted from their former uses into academic and residential buildings. </Text>
          </View>

          {/* Info */}
          <View style={[styles.badge]}>
            <View style={{ paddingBottom: 10 }}>
              <View style={{ flexDirection: 'row', marginTop: 0, backgroundColor: 'white', paddingHorizontal: 10, height: 35, borderRadius: 5, alignItems: 'center' }}>
                <View style={{ backgroundColor: '#f1f1f1', padding: 5, borderRadius: 5, alignItems: 'center', marginRight: 10 }}>

                  <Ionicons name="person-outline" size={17} color="black" />
                </View>
                <View style={{ backgroundColor: '#f1f1f1', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, alignItems: 'center' }}>
                  <Text style={styles.infoText}>New York University</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 5, backgroundColor: 'white', paddingHorizontal: 10, height: 35, borderRadius: 5, alignItems: 'center' }}>
                <View style={{ backgroundColor: '#f1f1f1', padding: 5, borderRadius: 5, alignItems: 'center', marginRight: 10 }}>
                  <Ionicons name="time-outline" size={17} color="black" /></View>
                <View style={{ backgroundColor: '#f1f1f1', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, alignItems: 'center' }}>
                  <Text style={styles.infoText}>10AM - 5PM (Weekdays)</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 5, backgroundColor: 'white', paddingHorizontal: 10, height: 35, borderRadius: 5, alignItems: 'center' }}>
                <View style={{ backgroundColor: '#f1f1f1', padding: 5, borderRadius: 5, alignItems: 'center', marginRight: 10 }}>
                  <Ionicons name="location-outline" size={17} color="black" />
                </View>
                <View style={{ backgroundColor: '#f1f1f1', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, alignItems: 'center' }}>
                  <Text style={styles.infoText}>Washington Square, New York, NY 10012</Text>
                </View>
              </View>
            </View>
            <View style={[styles.line, {width: windowWidth - 40}]}></View>
            <View style={styles.categories}>
              <View style={styles.categoryContainer}>
                <FontAwesome name="tag" size={14} color="#fff" />
                <Text style={styles.category}>Park</Text>
              </View>
              <View style={styles.categoryContainer}>
                <FontAwesome name="tag" size={14} color="#fff" />
                <Text style={styles.category}>Restaurant</Text>
              </View>
              <View style={styles.categoryContainer}>
                <FontAwesome name="tag" size={14} color="#fff" />
                <Text style={styles.category}>Square</Text>
              </View>
            </View>
          </View>

          {/* badge */}
          <View style={[styles.badge, { height: 250, padding: 15 }]}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ flex: 1 }}
              region={{
                latitude: 40.730824,
                longitude: -73.997330,
                latitudeDelta: 0.00864195044303443,
                longitudeDelta: 0.000142817690068,
              }}>
              <MapView.Marker
                coordinate={{
                  latitude: 40.730824,
                  longitude: -73.997330,
                }}
              />
            </MapView>
          </View>

          <View style={[styles.badge, { height: 250 }]}>
            <Text>Rating Information</Text>
          </View>

          <View style={[styles.section, { height: 500, backgroundColor:'#f1f1f1' }]}>
          </View>

          {/* {data.map((item, index) => (
            <View style={{ height: 75, margin: 10, backgroundColor: 'white' }}>
              <Text>{item.user_id}</Text>
            </View>
          ))} */}
        </Animated.ScrollView>
      </GestureHandlerRootView>
    )
  }

  renderItem = ({ item }) => {
    return (<TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail', { id: item.user_id }) }}>
      <View style={styles.item}>
        <View style={styles.subitem}>
          <Image
            source={require('../../../assets/images/banner.png')}
            // source={{uri: item.imgUrl}}
            style={styles.icon}
          />
          <Text style={styles.name}>{item.user_id}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.review}>{item.review}</Text>
          <StarRating ratings={3} reviews={0} />
        </View>
      </View>
    </TouchableOpacity>
    )
  }

  componentDidMount() {
    this.props.getListData()
  }
}