import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
    },
    profile: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      height: 20
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    image: {
      width: 35,
      height: 35,
      borderRadius: 25
    },
    search: {
      flexDirection: 'row',
      borderColor: '#c6c6c6',
      borderWidth: 1,
      borderRadius: 7,
      paddingHorizontal: 10,
      paddingVertical: 7,
      backgroundColor: 'white',
    },
    window: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,

    },
    content: {
      // flex: 1,
      // backgroundColor: '#ffffff',
      // marginTop: 35,
      // marginBottom: 5,
      // marginLeft: 5,
      // marginRight: 5,
      // borderRadius: 5
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

export default styles;