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
});
