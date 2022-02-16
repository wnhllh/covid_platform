import React from 'react'
import { Image } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Revenue from '../../view/revenue/View'
import Map from '../../view/map/View'
import App from '../../view/report/View'

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
    // alert(this.props.navigation);
    const { navigate } = this.props.navigation;
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
          title="场馆"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={homeIcon} />}
          onPress={() => this.setState({ selectedTab: 'home' })}
        >
    <Revenue navigate={this.props.navigation.navigate}></Revenue>
  </TabNavigator.Item>
  <TabNavigator.Item
          selected={this.state.selectedTab === 'map'}
          title="地图"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={mapIcon} />}
          onPress={() => this.setState({ selectedTab: 'map' })}
        >
    <Map></Map>
  </TabNavigator.Item>
  <TabNavigator.Item
          selected={this.state.selectedTab === 'review'}
          title="报到"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={reviewIcon} />}
          onPress={() => this.setState({ selectedTab: 'review' })}
        >
    <App></App>
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