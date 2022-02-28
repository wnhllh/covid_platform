import React from "react";
import { Image, StyleSheet, Text, TextInput, Button, View,  FlatList } from "react-native";
import { connect } from "react-redux";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000';

class Edit extends React.Component{

    render() {
        return (
            <View>
                <TextInput
                    value={this.props.route.params.data.item.name}
                    onChangeText={(text) => { this.props.setName(text)}}
                    style={{borderWidth:2, borderColor:'#000',padding:10, marginTop:10}}
                />
                <TextInput
                    value={this.props.route.params.data.item.description}
                    onChangeText={(text) => { this.props.setDescription(text)}}
                    style={{borderWidth:2, borderColor:'#000',padding:10, marginTop:10}}
                />
                <Button title="submit" onPress={()=>{this.handleSubmit()}} />  
            </View>
        );
    }

handleSubmit = async () => {
    console.log(this.props.route.params.data.item.id);
    const data = await axios.put(`${baseUrl}/venue/update/${this.props.route.params.data.item.id}`, { name: this.props.name, description: this.props.description })
}

}

const mapState = (state) => {
    console.log(state.report.name)
    console.log(state.report.description)
    return {
        name: state.report.name,
        description: state.report.description
    }
}

const mapDispatch = (dispatch) => {
    return {
      setName(res) {
        if(res) {
            const action = {
            type: 'CREATE_NAME',
            name: res
          }  
          dispatch(action)
        }
      },
      setDescription(res) {
        if(res) {
            const action = {
            type: 'CREATE_DESCRIPTION',
            description: res
          }  
          dispatch(action)
        }
      }
    }
  }

export default connect(mapState, mapDispatch)(Edit)

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        // flex: 1
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
        bottom: 0
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