import { StyleSheet } from 'react-native';

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
      top: 190
    },
    content: {
      flex: 1,
      backgroundColor: '#ffffff',
      marginTop: 35,
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
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

export default styles;