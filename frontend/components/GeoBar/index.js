import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Icon from '../Icon';

export default function GeoBar({ }) {
  const { height } = useWindowDimensions();

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateY: interpolate(
  //           panY.value,
  //           [-100, 0],
  //           [-100, 0],
  //           Extrapolate.CLAMP
  //         ),
  //       },
  //     ],
  //   };
  // });

  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <Animated.View
        style={[
          styles.container,
          { marginBottom: height * 0.1 + 15 },
          // animatedStyle,
        ]}
      >
        <TouchableOpacity 
          style={[styles.icon, styles.iconMargin]}
        >
          <Icon name="location" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <Icon name="navigate-outline" size={24} color="black" />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // left: 0,
    right: 0,
    top: 500,
    marginHorizontal: '2.5%',
    // alignItems: 'flex-end',
  },
  icon: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  iconMargin: {
    marginBottom: 15,
  },
});
