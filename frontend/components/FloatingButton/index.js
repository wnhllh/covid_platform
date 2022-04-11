import React, { useState, useCallback } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableNativeFeedback
} from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

import Animated, {
	interpolate,
	Extrapolate,
	useAnimatedStyle,
	withSpring,
	useAnimatedScrollHandler,
	useSharedValue
} from 'react-native-reanimated'
import { AntDesign, Entypo } from 'react-native-vector-icons'

import { windowWidth } from '../../assets/constants/Dimensions'

const AnimatedView = Animated.createAnimatedComponent(View)

export default function FloatingButton (props) {
	const animation = useSharedValue(0)
	const translateX = useSharedValue(0)
	const translateY = useSharedValue(0)
	const contextX = useSharedValue({ x: 0 })
	const contextY = useSharedValue({ y: 0 })

	// const scrollTo = useCallback((desX, desY) => {
	// 	"worklet";
	// 	translateX.value = desX;
	// 	translateY.value = desY;
	// }, [])

	const gesture = Gesture.Pan()
		.onStart(() => {
			contextX.value = { x: translateX.value }
			contextY.value = { y: translateY.value }
		})
		.onUpdate((event) => {
			translateX.value = event.translationX + contextX.value.x
			translateY.value = event.translationY + contextY.value.y
			// console.log(translateX.value)
		})
		.onEnd(() => {
			// if (translateX.value > 0) {
			// 	translateX.value = -windowWidth * 2 / 3
			// }
			// else if (translateX.value < 0) {
			// 	translateX.value = -windowWidth / 3
			// }
		})

	const toggleMenu = () => {
		animation.value = withSpring(!animation.value, { friction: 5 })
	}

	const dragAnimation = useAnimatedStyle(() => {
		const rotate = interpolate(animation.value, [0, 1], [0, 45])
		return {
			transform: [
				{
					translateX: translateX.value
				},
				{
					translateY: translateY.value
				},
				{
					rotate: rotate + 'deg'
				}
			]
		}
	})

	const dragAnimation1 = useAnimatedStyle(() => {
		const offsetY = interpolate(animation.value, [0, 1], [0, -60 - 5])
		return {
			transform: [
				{
					translateX: translateX.value
				},
				{
					translateY: translateY.value + offsetY
				}
			]
		}
	})

	const dragAnimation2 = useAnimatedStyle(() => {
		const offsetY = interpolate(animation.value, [0, 1], [0, -60 * 2 - 5])
		return {
			transform: [
				{
					translateX: translateX.value
				},
				{
					translateY: translateY.value + offsetY
				}
			]
		}
	})

	const dragAnimation3 = useAnimatedStyle(() => {
		const offsetY = interpolate(animation.value, [0, 1], [0, -60 * 3 - 5])
		return {
			transform: [
				{
					translateX: translateX.value
				},
				{
					translateY: translateY.value + offsetY
				}
			]
		}
	})

	return (
		<GestureDetector gesture={gesture}>
			<View style={[styles.container, props.style]}>
				<TouchableWithoutFeedback>
					<AnimatedView style={[styles.button, styles.list, dragAnimation3]}>
						<Entypo name="menu" size={20} color="#007aff" />
					</AnimatedView>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback>
					<AnimatedView style={[styles.button, styles.list, dragAnimation2]}>
						<Entypo name="text-document" size={20} color="#007aff" />
					</AnimatedView>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback>
					<AnimatedView style={[styles.button, styles.list, dragAnimation1]}>
						<Entypo name="location" size={20} color="#007aff" />
					</AnimatedView>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback
					onPress={() => {
						toggleMenu()
					}}
				>
					<AnimatedView style={[styles.button, styles.menu, dragAnimation]}>
						<AntDesign name="plus" size={24} color="#ffffff" />
					</AnimatedView>
				</TouchableWithoutFeedback>
			</View>
		</GestureDetector>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		position: 'absolute',
		width: 60,
		height: 60,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 10,
		shadowColor: 'grey',
		shadowOpacity: 0.25,
		shadowOffset: { height: 5 }
	},
	menu: {
		backgroundColor: '#007aff'
	},
	list: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#ffffff'
	}
})
