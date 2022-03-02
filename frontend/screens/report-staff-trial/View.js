import React from "react";
import { Image, StyleSheet, Text, View,  FlatList, jsonify } from "react-native";
import { Card, TextInput, Button, FAB } from "react-native-paper";
import { connect } from "react-redux";
import axios from 'axios';
import baseUrl from '../../assets/constants/BaseUrl'

// const baseUrl = 'http://127.0.0.1:5000';

class App extends React.Component{

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.props.venues.venues} 
                    renderItem = {(data) => {   return this.renderData(data) }} 
                    keyExtractor = {data => `${data.id}`}
                />

                <FAB
                    style = {styles.fab}
                    small = {false}
                    icon = "plus"
                    theme = {{colors:{accent:"green"}}} 
                    onPress = {() => this.props.navigation.navigate('Create')}
                />
            </View>
        );
    }

componentDidMount = async () => {
    await axios.get(`${baseUrl}/venue/get`)
    .then((res)=>{ 
        this.props.setState(res)
    })
}

clickedItem = (data) => {
    this.props.navigation.navigate('Details', {data: data});
}

renderData = (item) => {
    return (
        <Card style={styles.card}>
            <Text style={styles.title} onPress={() => this.clickedItem(item)}>{item.item.name}</Text>
            <Text>{item.item.description}</Text>
        </Card>
    )
}
}

const mapState = (state) => {
    return {
        venues: state.report
    }
}

const mapDispatch = (dispatch) => {
    return {
      setState(res) {
        if(res.data) {
          const action = {
            type: 'SET_STATE',
            venues: res.data
          }  
          dispatch(action)
        }
      }
    }
  }

export default connect(mapState, mapDispatch)(App)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    card: {
        flex: 1,
        margin: 10,
        padding: 20,
    },
    title: {
        fontSize: 17
    },
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 100
    },
    input1: {
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        height: 30
    },
    input2: {
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        height: 60
    }
});