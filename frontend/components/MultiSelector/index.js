import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function MultiSelector({ selectionMode,
	optionlist, onSelectSwitch }) {
	const [getSelectionMode, setSelectionMode] = useState([]);

	const updateSwitchData = (value) => {
		if (getSelectionMode.includes(value)) {
			const updatedItems = getSelectionMode.filter(res => res !== value)
			return setSelectionMode(updatedItems)
		}
		setSelectionMode([...getSelectionMode, value]);
		onSelectSwitch([...getSelectionMode, value]);
	}

	// console.log(getSelectionMode)

	return (
		<View
			style={[styles.listWrapper]}
		>
			{optionlist.map((category, index) => (
				<TouchableOpacity
					key={index}
					activeOpacity={1}
					onPress={() => updateSwitchData(index + 1)}
					style={{
						// flex: 1,
						backgroundColor: getSelectionMode.includes(index + 1) ? 'orange' : '#f1f1f1',
						borderRadius: 5,
						margin: 5,
						paddingHorizontal: 15,
						justifyContent: 'center',
						alignItems: 'center',
						height: 27,
					}}
				>
					<Text
						style={[styles.listText, getSelectionMode.includes(index + 1) && styles.activeListText]}
					>
						{category}</Text>
				</TouchableOpacity>
			))
			}
		</View>
	)
}

const styles = StyleSheet.create({
	listWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		// alignItems: 'center',
		// height: '100%',
		width: '100%',
		 
		 backgroundColor: 'white', borderRadius: 7, borderColor: '#ad40af'
	},
	listText: {
		fontSize: 12,
		fontWeight: 'bold',
		color: 'gray',
	},
	activeListText: {
		color: 'white',
		borderBottomWidth: 1,
		// textDecorationLine: 'underline'
	}
})