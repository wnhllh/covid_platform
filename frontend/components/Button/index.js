import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const Button = ({ text, navigation }) => {
	return (
		<TouchableOpacity onPress={navigation}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default Button
