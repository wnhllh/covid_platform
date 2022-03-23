import React, { useState, useEffect, useRef, useCallback } from 'react'
import { SafeAreaView, View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import styles from './style'

import Animated from 'react-native-reanimated'

import Carousel from 'react-native-snap-carousel'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import BannerSlider from '../../../components/BannerSlider'
import CustomSwitch from '../../../components/RadioSwitch'
import MultiSelector from '../../../components/MultiSelector'
import MultiCheckbox from '../../../components/MultiCheckbox'
import SingleCheckbox from '../../../components/SingleCheckbox'
import StarRating from '../../../components/Rating'
import sliderData from '../../../data/venueData'
import Accordion from '../../../components/Accordion'
import { windowWidth, windowHeight } from '../../../assets/constants/Dimensions'

export default function Venue(props) {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [mode, setMode] = useState(1);
  const childFunc = useRef(null);

  useEffect(() => {
    props.getVenuesInfo();
  });

  const getHeaderY = (mode) => {
    if (mode === 2) {
      return 0
    } else {
      return Animated.interpolateNode(scrollY, {
        inputRange: [0, 100],
        outputRange: [100, 0],
        extrapolate: 'clamp'
      })
    }
  }

  const setModeFunc = () => {
    if (mode === 1) {
      setMode(2)
    } else {
      setMode(1)
    }
  }

  const multiSet = () => {
    setModeFunc();
    childFunc.current();
    // console.log(childFunc.current)
    // refs.Accordion.startAnimation();
  }


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

      <Animated.View style={{ height: getHeaderY(mode) }}>
        <Carousel
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
          onSelectSwitch={props.setTab}
        />
      </View>

      {/* <TouchableOpacity onPress={this.setMode}> */}
      <Accordion childFunc={childFunc} press={setModeFunc}>
        <View style={styles.subtitle}><Text style={styles.subtitleText}>RATING</Text></View>
        <MultiSelector
          selectionMode={[1]}
          optionlist={["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"]}
          onSelectSwitch={() => { }}
        />
        <View style={styles.subtitle}><Text style={styles.subtitleText}>CATERGORY</Text></View>
        <MultiSelector
          selectionMode={[1]}
          optionlist={["Restaurant", "Gym", "Library", "Shopping Center", "Hotel", "Museum", "Theater", "Station", "KTV"]}
          onSelectSwitch={() => { }}
        />

        <Text>DISTANCE</Text>
        <Text>"sliderbar"</Text>
        <Text>Hours</Text>
        <Text>"time-picker"</Text>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={multiSet}>
            <View style={styles.button1}>
              <Text style={styles.buttonText1}>RESET</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={multiSet}>
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
            nativeEvent: { contentOffset: { y: scrollY } }
          }
        ])}

        style={{ top: -35 }}
        showsVerticalScrollIndicator={false}
        data={props.tab == 1 && props.categories}
        keyExtractor={(item, index) => index} //should be item.id
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => { props.navigation.navigate('List', { id: 4, venue_name: item.name, venue_desciption: item.description }) }}>
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


const renderBanner = ({ item, index }) => {
  return <BannerSlider data={item} />
}