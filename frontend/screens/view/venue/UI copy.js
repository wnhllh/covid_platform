import React from 'react'
import { SafeAreaView, View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import styles from './style'

import Animated from 'react-native-reanimated'

import Carousel from 'react-native-snap-carousel'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import BannerSlider from '../../../components/BannerSlider'
import CustomSwitch from '../../../components/RadioSwitch'
import StarRating from '../../../components/Rating'
import sliderData from '../../../data/venueData'
import Accordion from '../../../components/Accordion'
import { windowWidth, windowHeight } from '../../../assets/constants/Dimensions'

export default class Venue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0),
      mode: 1
    }
    this.childFunc = React.createRef();
    this.multiSet = this.multiSet.bind(this);
    // this.getHeaderY = this.getHeaderY.bind(this)
    // this.setMode = this.setMode.bind(this)
  }

  getHeaderY(mode) {
    if (mode === 2) {
      return 0
    } else {
      return Animated.interpolateNode(this.state.scrollY, {
        inputRange: [0, 100],
        outputRange: [100, 0],
        extrapolate: 'clamp'
      })
    }
  }

  setMode = () => {
    if (this.state.mode === 1) {
      this.setState({
        mode: 2
      })
    } else {
      this.setState({
        mode: 1
      })
    }
  }

  multiSet = () => {
    this.setMode();
    this.childFunc.current();
    // this.refs.Accordion.startAnimation();
  }

  render() {
    console.log(this.state.mode)
    return (
      <SafeAreaView style={{ padding: 20, marginLeft: 5, marginRight: 5 }}>
        <View style={styles.profile}>
          <View style={{ justifyContent: 'left', flexDirection: 'row' }}>
            <Feather name="map-pin" size={17} color={'black'} style={{ marginTop: 1 }} />
            <Text style={styles.name}> Times Square</Text>
          </View>
          <Ionicons name="ios-notifications-outline" size={20} color={'black'} style={{ marginTop: 0 }} />
        </View>
        <View style={styles.search}>
          <Feather
            name="search"
            size={20}
            color='#c6c6c6'
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Search"
          />
        </View>

        <Animated.View style={{ height: this.getHeaderY(this.state.mode) }}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth - 10}
            itemWidth={300}
            loop={true}
            containerCustomStyle={{ flex: 1 }}
            slideStyle={{ flex: 1 }}
          />
        </Animated.View>

        <View style={{ marginTop: 10, marginRight: 35, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
          <CustomSwitch
            selectionMode={1}
            optionlist={["Safest", "Nearest", "Rating", "#Visit"]}
            onSelectSwitch={this.props.setTab}
          />
        </View>

        {/* <TouchableOpacity onPress={this.setMode}> */}
        <Accordion childFuncs={this.childFunc} press={this.setMode}>
          <Text>RATING</Text>
          <Text>"multi-checkbox"</Text>
          <Text>TYPE</Text>
          <Text>"multi-checkbox"</Text>
          <Text>DISTANCE</Text>
          <Text>"sliderbar"</Text>
          <Text>Hours</Text>
          <Text>"time-picker"</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={this.multiSet}>
              <View style={styles.button1}>
                <Text style={styles.buttonText1}>RESET</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.multiSet}>
              <View style={styles.button2}>
                <Text style={styles.buttonText2}>CONFIRM</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Accordion>
        {/* </TouchableOpacity> */}

        {/* {this.props.tab == 1 && */}
        <Animated.FlatList
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: this.state.scrollY } }
            }
          ])}

          style={{ top: -35 }}
          showsVerticalScrollIndicator={false}
          data={this.props.tab == 1 && this.props.categories}
          keyExtractor={(item, index) => index} //should be item.id
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('List', { id: 4, venue_name: item.name, venue_desciption: item.description }) }}>
                <View style={[styles.card]}>
                  <Image source={require('../../../assets/images/test.png')} style={styles.image} />
                  <View style={[styles.cardText]}>
                    <View style={styles.titleWrapper}>
                      <Text style={styles.title}>{item.name}</Text>
                      <StarRating style={styles.starRating} ratings={3} reviews={79} />
                    </View>
                    <View style={[styles.textWrapper]}>
                      <Feather name="map-pin" size={13} color={'gray'} />
                      <Text style={styles.text}>  2.2 km</Text>
                      <Text style={styles.text}>  |  </Text>
                      <Feather name="calendar" size={13} color={'gray'} />
                      <Text style={styles.text}>  5am - 10pm</Text>
                    </View>
                    <View style={[styles.textWrapper]}>
                      <Feather name="list" size={13} color={'gray'} />
                      <Text style={styles.text}>  Restaurant, Bar</Text>
                    </View>
                    <View style={styles.detailWrapper}>
                      <View style={styles.detail}><Text style={styles.info}>   # OF VISIT: 25   </Text></View>
                      <View style={styles.detail}><Text style={styles.info}>   # OF CASES: 0   </Text></View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        />
        {/* } */}
      </SafeAreaView>
    )
  }

  componentDidMount() {
    this.props.getVenuesInfo()
  }
}

const renderBanner = ({ item, index }) => {
  return <BannerSlider data={item} />
}