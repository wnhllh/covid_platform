import React from 'react'
import { SafeAreaView, View, Text, Image, ImageBackground, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import styles from './style'

import Carousel from 'react-native-snap-carousel'
import Feather from 'react-native-vector-icons/Feather'

import BannerSlider from '../../components/BannerSlider'
import CustomSwitch from '../../components/CustomSwitch'
import sliderData from './mock'
import { windowWidth, windowHeight } from '../../assets/constants/Dimensions'

export default class Venue extends React.Component {

    render() {

      const { width, height } = Dimensions.get('window')
      let result = null
        result = (
          <SafeAreaView style={styles.container}>
          <ScrollView style={{padding: 20}}>
          <View style={styles.profile}>
            <Text style={styles.name}>Hello User!</Text>
            <ImageBackground
              source={require('../../assets/images/banner.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.search}>
            <Feather
              name="search"
              size={20}
              color='#c6c6c6'
              style={{marginRight:5}}
            />
            <TextInput
              placeholder="Search"
            />
          </View>
          <View style={styles.window}>
            <Text style={{fontSize:15, fontWeight: 'bold'}}>Top Venues</Text>
            <TouchableOpacity onPress={()=>{}}><Text style={{color: '#007aff'}}>See all</Text></TouchableOpacity>
          </View>
          <View>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth - 40}
            itemWidth={300}
            loop={true}
          />
          </View>
          <View style={{marginTop: 15}}>
            <CustomSwitch
              selectionMode={1}
              optionlist={["0-Case Venues", "Venues w Cases"]}
              onSelectSwitch={this.props.setTab}
            />
          </View>
          <View>
          {this.props.tab == 1 &&
          <ScrollView
            style={styles.content}>
            <View
              style={styles.list}>
              {
                this.props.categories.map((item) => {
                  return (
                    <TouchableOpacity
                     key={item.id}
                     onPress={() => {this.props.navigation.navigate('List', { id: item.id, venue_name: item.name, venue_desciption: item.description })}} //should be item.id
                    >
                    <View
                      style={styles.item}>
                      <Image
                        // source={{uri: item.imgUrl}}
                        source={require('../../assets/images/banner.png')}
                        style={{width: (width - 20) / 3 - 20, height: (width - 20) / 3 - 20, borderRadius: 10, marginLeft: 5}}
                      />
                    <View>
                      <Text style={styles.text}>{item.name}</Text>
                      <View style={{display: 'flex',flexDirection: 'row'}}><Text style={styles.rating}>Average Rating:</Text><Text style={styles.rating2}>★★★☆☆</Text></View>
                      <View style={{display: 'flex',flexDirection: 'row'}}><Text style={styles.rating}>Infection Level:</Text><Text style={styles.rating3}>★★☆☆☆</Text></View>
                    </View>
                    </View>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </ScrollView>
        }
          </View>
          </ScrollView>
        </SafeAreaView>
        )
      return result
    }

    componentDidMount = () => {
      this.props.getVenuesInfo()
  }

    // componentDidMount() {
    //   fetch('http://www.llh.com/api/index.json')
    //     .then((res) => res.json())
    //     .then(this.props.setCategories)
    //     .catch(() => {alert('Request failed')})
    // }
}

const renderBanner = ({item, index}) => {
  return <BannerSlider data={item}/>
}