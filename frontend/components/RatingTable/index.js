import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import styles from './styles'

export default function RateDetail (props) {
	const { style, point, maxPoint, totalRating, data } = props
	return (
		<View style={[styles.contain, style]}>
			<View style={styles.contentLeft}>
				<Text style={{ fontSize: 45 }}>{point}</Text>
			</View>
			<View style={styles.containRight}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.starLeft}>
						<View style={styles.lineStar}>
							{[1, 2, 3, 4, 5].map((icon, index) => {
								return (
									<Feather
										key={'star5' + index}
										name="star"
										color={'grey'}
										solid
										size={8}
									/>
								)
							})}
						</View>
						<View style={styles.lineStar}>
							{[1, 2, 3, 4].map((icon, index) => {
								return (
									<Feather
										key={'star4' + index}
										name="star"
										color={'grey'}
										solid
										size={8}
									/>
								)
							})}
						</View>
						<View style={styles.lineStar}>
							{[1, 2, 3].map((icon, index) => {
								return (
									<Feather
										key={'star3' + index}
										name="star"
										color={'grey'}
										solid
										size={8}
									/>
								)
							})}
						</View>
						<View style={styles.lineStar}>
							{[1, 2].map((icon, index) => {
								return (
									<Feather
										key={'star2' + index}
										name="star"
										color={'grey'}
										solid
										size={8}
									/>
								)
							})}
						</View>
						<View style={styles.lineStar}>
							<Feather name="star" color={'grey'} solid size={8} />
						</View>
					</View>
					<View style={styles.containStatus}>
						{data.map((percent, index) => {
							return (
								<View style={styles.contentLineStatus} key={'status' + index}>
									<View style={styles.lineStatusGray} />
									<View
										style={[
											styles.lineStatusPrimary,
											{ width: percent, backgroundColor: 'orange' }
										]}
									/>
								</View>
							)
						})}
					</View>
				</View>
				<Text>{totalRating} Ratings</Text>
			</View>
		</View>
	)
}
