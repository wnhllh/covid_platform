import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  contain: {
    padding: 20,
    flex: 1,
    top: 30,
    // alignItems: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: -100,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    height:35,
    width: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 25,
    },
    headerText: {
      fontSize: 35,
      fontWeight: 'bold',
    },
    buttonWrapper: {
      zIndex: 3,
      position: 'absolute',
      top: Dimensions.get('window').height -75,
      left: 30,
      right: 30,
  },
  codeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    borderRadius: 20,
    height: 500,
    // justifyContent: 'center',
    flex: 1,
  },
  qrcode: {
    margin: 15,
  },
  time: {
    margin: 20,
    fontSize: 20,
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
});
