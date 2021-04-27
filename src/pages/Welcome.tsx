import React from 'react'
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native'

import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Welcome()
{
	return (
		<SafeAreaView style={styles.container} >
			<Text style={styles.title} >
				Manage {'\n'}
				your plants {'\n'}
				easily
			</Text>

			<Image source={wateringImg} />

			<Text style={styles.subtitle} >
				Don't forget to water your plants.
				We take care of remembering you whenever needed.
			</Text>

			<Button title='>' />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create(
	{
		container:
		{
			flex: 1,
			alignItems: 'center',
			justifyContent: 'space-around',
			paddingHorizontal: 30
		},

		title:
		{
			fontSize: 28,
			textAlign: 'center',
			color: colors.heading,
			marginTop: 38,
			fontFamily: fonts.heading,
			lineHeight: 34
		},

		subtitle:
		{
			textAlign: 'center',
			fontSize: 18,
			paddingHorizontal: 20,
			color: colors.heading,
			fontFamily: fonts.text
		},

		image:
		{
			width: 292,
			height: 284
		}
	}
)