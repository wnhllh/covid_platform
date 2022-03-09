import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useCallback } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import { windowWidth, windowHeight } from '../../assets/constants/Dimensions';


class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // translateY :new Animated.value(0),
    }
    this.scrollTo = this.scrollTo.bind(this);
  }

  translateY = 0

	 scrollTo = (des) => {
		"worklet";
		this.translateY.value = withSpring(des, { damping: 50 });
	}

	 gesture = Gesture.Pan()
	.onUpdate((event) => {
		console.log(event.translationY );
		// console.log(-windowHeight)
		this.translateY.value = event.translationY;
		this.translateY.value = Math.max(this.translateY.value, 85 - windowHeight)
		// translateY.value = scrollY
	})
	.onEnd(() => {
		if (this.translateY.value > -windowHeight / 3) {
			this.scrollTo(- windowHeight / 6)
		}
		else if (this.translateY.value < -windowHeight * 2 / 3) {
			this.scrollTo(85 - windowHeight)
		}
	});

  componentDidMount() {
    this.scrollTo(- windowHeight / 6)
  }

	bottomAnimation = useAnimatedStyle(() => {
		// const borderRadius = Animated.interpolateNode(translateY.value, {
		// 			inputRange: [85 - windowHeight, 170 - windowHeight],
		// 			outputRange: [25, 5],
		// 			extrapolate: 'clamp'
		// 		});
		return {
			// borderRadius,
			transform: [
				{ translateY: this.translateY.value },
			],
		}
	})
  render() {
	return (
		<GestureDetector gesture={gesture}>
		<Animated.View style={[styles.container, bottomAnimation]}>
			<View style={styles.line}></View>
			<View style={styles.content}>
			<Text>Hi</Text>
			</View>
		</Animated.View>
		</GestureDetector>
	)
}
}

const styles = StyleSheet.create({
	container: {
		height: windowHeight,
		width: windowWidth,
		position: 'absolute', 
		top: windowHeight, 
		left: 0,
		borderRadius:15,
  
		backgroundColor: 'green',
		opacity: 1,
	},
	line: {
		width: 75,
		height: 4,
		backgroundColor: 'red',
		alignSelf: 'center',
		marginVertical: 10,
		borderRadius: 2,
	},
	content: {
		paddingHorizontal: 2.5
	}
})

export default Report;