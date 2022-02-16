import React from 'react'
import { View, Text, Image, TextInput, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import styles from './style'

const baseUrl = 'http://127.0.0.1:5000';

class Venue extends React.Component {
  
    render() {
      const { width, height } = Dimensions.get('window')
      let result = null
        result = (
          <View style={styles.container}>
          <Image 
            source={require('../../resource/imgs/banner.png')}
            style={styles.image}
          />
          <TextInput 
            placeholder="Search for a Venues"
            style={styles.input}
          />
          <ScrollView
            style={styles.content}>
            <View 
              style={styles.list}>
              {
                this.props.categories.map((item) => {
                  return (
                    <TouchableWithoutFeedback
                     key={item.id}
                     onPress={this.handleItemClick.bind(this, item.id)} //should be item.id
                    >
                    <View 
                      style={styles.item}>
                      <Image 
                        // source={{uri: item.imgUrl}}
                        source={require('../../resource/imgs/banner.png')}
                        style={{width: (width - 20) / 3 - 20, height: (width - 20) / 3 - 20, borderRadius: 10, marginLeft: 5}}
                      />
                    <View>
                      <Text style={styles.text}>{item.name}</Text>
                      <View style={{display: 'flex',flexDirection: 'row'}}><Text style={styles.rating}>Average Rating:</Text><Text style={styles.rating2}>★★★☆☆</Text></View>
                      <View style={{display: 'flex',flexDirection: 'row'}}><Text style={styles.rating}>Infection Level:</Text><Text style={styles.rating3}>★★☆☆☆</Text></View>
                    </View>
                    </View>
                    </TouchableWithoutFeedback>
                  )
                })
              }
            </View>
          </ScrollView>
        </View>
        )
      return result
    }

    componentDidMount = async () => {
      await axios.get(`${baseUrl}/venue/get`)
      .then((res)=>{ 
          this.props.setCategories(res)
      })
  }
    // componentDidMount() {
    //   fetch('http://www.llh.com/api/index.json')
    //     .then((res) => res.json())
    //     .then(this.props.setCategories)
    //     .catch(() => {alert('Request failed')})
    // }

    handleItemClick(id) {
      this.props.navigate('List', { id: id })
    }
  
}

const mapState = (state) => {
  return {
    categories: state.venue.categories
  }
}

const mapDispatch = (dispatch) => {
    return {
      setCategories(res) {
        if(res.data) {
          const action = {
            type: 'SET_CATEGORIES',
            data: res.data
          }
          dispatch(action)
        }
      }
    }
}

export default connect(mapState, mapDispatch)(Venue)