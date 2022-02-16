import React from 'react'
import { Image } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Revenue from '../../view/revenue/View'
import Map from '../../view/map/View'

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
    // const { navigate } = this.props.navigation;
  }

  render() {
    const homeIcon = require('../../resource/icons/home.png')
    const mapIcon = require('../../resource/icons/map.png')
    const reviewIcon = require('../../resource/icons/reviews.png')
    const profileIcon = require('../../resource/icons/setting.png')
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Revenue"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={homeIcon} />}
          onPress={() => this.setState({ selectedTab: 'home' })}
        >
    <Revenue></Revenue>
  </TabNavigator.Item>
  <TabNavigator.Item
          selected={this.state.selectedTab === 'map'}
          title="Map"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={mapIcon} />}
          onPress={() => this.setState({ selectedTab: 'map' })}
        >
    <Map></Map>
  </TabNavigator.Item>
  <TabNavigator.Item
          selected={this.state.selectedTab === 'review'}
          title="Report"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={reviewIcon} />}
          onPress={() => this.setState({ selectedTab: 'review' })}
        >
    <Map></Map>
  </TabNavigator.Item>
  <TabNavigator.Item
          selected={this.state.selectedTab === 'setting'}
          title="Profile"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={profileIcon} />}
          onPress={() => this.setState({ selectedTab: 'setting' })}
        >
    <Map></Map>
  </TabNavigator.Item>
  </TabNavigator>
    )
  }
}