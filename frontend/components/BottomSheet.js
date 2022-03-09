import { StyleSheet, View } from 'react-native';
import React, { useEffect, useCallback } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import { windowWidth, windowHeight } from '../assets/constants/Dimensions';

const BottomSheet = ({ children, childFunc, scrollY }) => {

	const translateY = useSharedValue(0);
	const context = useSharedValue({y:0});

	const scrollTo = useCallback((des) => {
		"worklet";
		translateY.value = withSpring(des, { damping: 50 });
	}, [])

	const gesture = Gesture.Pan()
	.onStart(() => {
		context.value = { y: translateY.value }
	})
	.onUpdate((event) => {
		// console.log(scrollY);
		console.log(translateY.value)
		translateY.value = event.translationY + context.value.y;
		translateY.value = Math.max(translateY.value, 85 - windowHeight)
	})
	.onEnd(() => {
		if (translateY.value > -windowHeight / 3) {
			scrollTo(- windowHeight / 6)
		}
		else if (translateY.value < -windowHeight * 2 / 3) {
			scrollTo(85 - windowHeight)
		}
	});

	React.useEffect(() => {
		scrollTo(- windowHeight / 6)
    	childFunc.current = () => {
			console.log("hi")
			translateY.value = withSpring(85 - windowHeight, { damping: 50 });
		};
  }, []);

	const bottomAnimation = useAnimatedStyle(() => {
		// const borderRadius = Animated.interpolateNode(translateY.value, {
		// 			inputRange: [85 - windowHeight, 170 - windowHeight],
		// 			outputRange: [25, 5],
		// 			extrapolate: 'clamp'
		// 		});
		return {
			// borderRadius,
			transform: [
				{ translateY: translateY.value },
			],
		}
	})

	const newAnimation = () => {
		return Animated.interpolate(translateY.value, 
		  [  -720, -140 ],
		  [20, 20],
		  Animated.Extrapolate.CLAMP
		)
	  }

	return (
		<GestureDetector gesture={gesture}>
		<Animated.View style={[styles.container, bottomAnimation, {borderRadius: newAnimation}]}>
			<View style={styles.line}></View>
			<View style={styles.content}>
			{children}
			</View>
		</Animated.View>
		</GestureDetector>
	)
}

const styles = StyleSheet.create({
	container: {
		height: windowHeight,
		width: windowWidth,
		position: 'absolute', 
		top: windowHeight, 
		left: 0,
		borderRadius:15,

		backgroundColor: 'grey',
		opacity: 1,
	},
	line: {
		width: 75,
		height: 4,
		backgroundColor: 'gray',
		alignSelf: 'center',
		marginVertical: 10,
		borderRadius: 2,
	},
	content: {
		paddingHorizontal: 2.5
	}
})

export default BottomSheet;