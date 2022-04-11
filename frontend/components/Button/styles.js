import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
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
})
