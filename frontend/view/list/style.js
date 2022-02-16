import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10
    },
    subitem: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10
        // backgroundColor: '#ffffff'
    },
    icon: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        width: 50,
        height: 50
    },
    info:{
        flex: 1
        // display: 'flex',
        // flexDirection: 'column'
    },
    name: {
        lineHeight: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    review: {
        lineHeight: 20,
        marginLeft: 10,
        marginRight: 10,
        fontFamily: 'Verdana',
        fontSize: 12,
        marginTop: 10,
        marginBottom: 10
    },
    rating: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        color: '#ff9933'
      }
})

export default styles;