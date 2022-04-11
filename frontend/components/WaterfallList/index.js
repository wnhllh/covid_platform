import React, { Component, useState, useEffect, useCallback } from 'react'
import {
	View,
	StyleSheet,
	SafeAreaView,
	Text,
	Image,
	FlatList,
	ScrollView,
	ImageBackground,
	TouchableOpacity
} from 'react-native'
import { BlurView } from 'expo-blur'

import styles from './style'

import StarRating from '../Rating'

import { windowHeight, windowWidth } from '../../assets/constants/Dimensions'

const ReviewBox = (item, index) => {
	return (
		<View
			key={index}
			style={{
				borderRadius: 5,
				margin: 2.5,
				width: windowWidth / 2 - 7.5,
				height: (windowWidth / 2 - 7.5) * item.ratio * 0.8 + 120,
				backgroundColor: 'white'
			}}
		>
			<View
				style={{
					borderRadius: 5,
					margin: 5,
					width: windowWidth / 2 - 7.5 - 10,
					height: (windowWidth / 2 - 7.5) * item.ratio * 0.8,
					backgroundColor: item.color
				}}
			></View>
			<View
				style={{
					paddingHorizontal: 10,
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}
			>
				{/* <View style={{ height: 46, width: 46, borderRadius: 23, backgroundColor: 'white', marginTop: -55, marginLeft: -1, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{height: 40, width: 40, borderRadius: 20, }} source={require('../../../assets/images/test.png')} />
          </View> */}
				<View
					style={{
						height: 21,
						width: windowWidth / 2 - 7.5 - 85,
						padding: 2.5,
						borderBottomLeftRadius: 5,
						backgroundColor: 'rgba(255, 255, 255, 0.5)',
						marginTop: -25,
						marginLeft: -5,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				></View>
				<View
					style={{
						height: 21,
						width: 75,
						padding: 2.5,
						borderBottomRightRadius: 5,
						backgroundColor: 'rgba(255, 255, 255, 1)',
						marginTop: -25,
						marginRight: -5,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<StarRating ratings={3} reviews={0} />
				</View>
			</View>
			<View
				style={{
					paddingHorizontal: 10,
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}
			>
				<Text style={{ color: '#2b2b2b', fontSize: 14, fontWeight: 'bold' }}>
					NAME
				</Text>
				<Text style={{ color: '#2b2b2b', fontSize: 14, fontWeight: 'bold' }}>
					21.10.19
				</Text>
			</View>
			<View style={styles.line}></View>
			<View style={{ marginHorizontal: 7.5, height: 120 }}>
				<Text style={[styles.descText, { color: 'gray' }]}>
					Originally a fishing village and market town, Shanghai grew in
					importance in the 19th century due to both domestic and foreign trade.{' '}
				</Text>
			</View>
		</View>
	)
}

export default function WaterfallList ({ items }) {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{ flexDirection: 'row' }}>
				<View>
					{items
						.filter((_, index) => index % 2 !== 0)
						.map((item, index) => ReviewBox(item, index))}
				</View>
				<View>
					{items
						.filter((_, index) => index % 2 === 0)
						.map((item, index) => ReviewBox(item, index))}
				</View>
			</View>
		</ScrollView>
	)
}
