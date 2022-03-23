import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  contain: {
    padding: 20,
    flex: 1,
    top: 30,
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
    buttonWrapper: {
      zIndex: 3,
      position: 'absolute',
      top: Dimensions.get('window').height -75,
      left: 30,
      right: 30,
  },
  header: {
    fontSize: 20,

  },
  line: {
    width: '100%',
    height: 1,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderStyle: 'dashed',
    marginVertical: 10,
  },
  text: {
    margin: 5,
    fontSize: 14,
    fontWeight: 'bold'
  },
  datePicker: {
    // top: -20,
    left: -240,
    marginVertical: 5,
    // backgroundColor: 'red'
  },
  sign: {
    marginTop: 25,
  // bottom: 70,    
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
