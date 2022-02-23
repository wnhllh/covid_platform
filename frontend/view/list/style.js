import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,

        shadowColor: 'gray',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 10
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
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
    backgroudImage: {
        height: Dimensions.get('window').height * .275
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 55,
        marginLeft: 25,
        justifyContent: 'space-between'
    },
    navbarText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 35,
        marginTop: 20
    },
    description: {
        color: 'white',
        fontSize: 15,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        borderRadius: 20
    },
    badge: {
        backgroundColor: 'white',
        padding: 20,
        paddingBottom: 30,
        paddingTop: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width * .90,
        alignSelf: 'center',
        marginTop: 10,

        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    reviewWrapper: {
        marginTop: Dimensions.get('window').height * .125,
        padding: 10
    },
    socialIcon: {
        alignSelf: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    infoText: {
        fontSize: 14
    },
    infoTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    descText: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5

    },
    descTitle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    locationIcon: {
        backgroundColor: '#007aff',
        position: 'absolute',
        bottom: -25,
        left: '48%',
        borderRadius: 25,
        width: 45,
        height: 45,
        justifyContent: 'center',

        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    buttonWrapper: {
        position: 'absolute',
        left: 17.5,
        right: 17.5,
        bottom: Dimensions.get('window').height * .1,
    },
    button: {
        height: 50,
        marginHorizontal: 20,
        backgroundColor: '#007aff',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default styles;