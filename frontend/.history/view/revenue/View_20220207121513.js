import React from 'react'
import { View, StyleSheet, Text, Image, TextInput, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native'

export default class Revenue extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        categories: [],
        selected: 'tab1'
      }
      this.handleGetListSucc = this.handleGetListSucc.bind(this)
    }
  
    render() {
      const { width, height } = Dimensions.get('window')
      const rating = "&#1587;&#1615;&#1576;&#1618;"
      let result = null
      if (this.state.selected === 'tab1') {
        result = (
          <View style={styles.container}>
          <Image 
            source={require('../../resource/imgs/banner.png')}
            style={styles.image}
          />
          <TextInput 
            placeholder="Search Revenue"
            style={styles.input}
          />
          <ScrollView
            style={styles.content}>
            <View 
              style={styles.list}>
              {
                this.state.categories.map((item) => {
                  return (
                    <TouchableWithoutFeedback onPress={()=>alert(item)}>
                    <View 
                      key={item.id}
                      style={styles.item}>
                      <Image 
                        // source={{uri: item.imgUrl}}
                        source={require('../../resource/imgs/banner.png')}
                        style={{width: (width - 20) / 3 - 20, height: (width - 20) / 3 - 20, borderRadius: 10, marginLeft: 5}}
                      />
                    <View>
                      <Text style={styles.text}>{item.title}</Text>
                      <View style={{display: 'flex',flexDirection: 'row'}}><Text style={styles.rating}>Average Rating:</Text><Text style={styles.rating2}>★★★★☆</Text></View>
                      <View style={{display: 'flex',flexDirection: 'row'}}><Text style={styles.rating}>Infection Level:</Text><Text style={styles.rating3}>★★☆☆☆</Text></View>
                    </View>
                    </View>
                    </TouchableWithoutFeedback>
                  )
                })
              }
            </View>
          </ScrollView>
          {/* <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableWithoutFeedback onPress={()=>{this.setState({selected:'tab1'})}}>
              <Text style={{flex: 1}}>Revenue</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{this.setState({selected:'tab2'})}}>
              <Text style={{flex: 1}}>Map</Text>
            </TouchableWithoutFeedback>
          </View> */}
        </View>
        )
      } else {
        result = (
          <View>
          <Text>Test</Text>
                  {/* <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableWithoutFeedback onPress={()=>{this.setState({selected:'tab1'})}}>
              <Text style={{flex: 1}}>Revenue</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{this.setState({selected:'tab2'})}}>
              <Text style={{flex: 1}}>Map</Text>
            </TouchableWithoutFeedback>
          </View> */}
          </View>
        )
      }
      return result
    }
  
    componentDidMount() {
      fetch('http://www.llh.com/api/index.json')
        .then((res) => res.json())
        .then(this.handleGetListSucc)
        .catch(() => {alert('Request failed')})
    }
  
    handleGetListSucc(res) {
      if(res.ret && res.data) {
        this.setState({
          categories: res.data.categories
        })
      }
      // alert(JSON.stringify(res))
    }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1'
    },
    image: {
      width: '100%',
      height: '27%'
    },
    input: {
      position: 'absolute',
      backgroundColor: '#ffffff',
      left: 0,
      right: 0,
      height: 30,
      paddingLeft: 10,
      top: 150
    },
    content: {
      flex: 1,
      backgroundColor: '#ffffff',
      marginTop: 35,
      marginBottom: 5,
      marginLeft: 5,
      borderRadius: 5
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      marginTop: 10,
      marginBottom: 10,
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 10,
      marginBottom: 10,
    },
    text: {
      marginLeft: 25,
      marginTop: 10,
      marginBottom: 5,
      fontFamily: 'Verdana',
      fontSize: 15,
      fontWeight: '500',
    },
    rating: {
        marginLeft: 25,
        marginTop: 10,
        fontFamily: 'Verdana',
        fontSize: 12,
        fontWeight: '400',
      },
      rating2: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 12,
        fontWeight: '400',
        color: '#ff9933'
      },
      rating3: {
        marginLeft: 12,
        marginTop: 10,
        fontSize: 12,
        fontWeight: '400',
        color: 'purple'
      }
  })