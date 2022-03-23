import { StyleSheet, View } from 'react-native';
import React, { useEffect, useCallback } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import { windowWidth, windowHeight } from '../../assets/constants/Dimensions';

const BottomSheet = ({ children, childFunc, childScroll, scrollY }) => {

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
		// console.log(translateY.value)
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

	childFunc.current = () => {
		"worklet";
		scrollTo(85 - windowHeight);
	};

	childScroll.current = () => {
		"worklet";
		translateY.value = -140 - scrollY;
	};

	React.useEffect(() => {
		scrollTo(- windowHeight / 6)
  }, []);

	const bottomAnimation = useAnimatedStyle(() => {
		const borderRadius = interpolate(
			translateY.value,
			[-windowHeight + 200, -windowHeight+ 70],
			[25, 5],
			Extrapolate.CLAMP
		  );
		return {
			borderRadius,
			transform: [
				{ translateY: translateY.value },
			],
		}
	})

	return (
		<GestureDetector gesture={gesture}>
		<Animated.View style={[styles.container, bottomAnimation, {borderRadius: 20}]}>
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

		backgroundColor: 'rgba(235,235,235,1)',
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