import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Confirmation()
{
	return (
		<SafeAreaView style={styles.container} >
			<View style={styles.content} >
				<Text style={styles.emoji} >
					😄
				</Text>

				<Text style={styles.title} >
					All set up
				</Text>

				<Text style={styles.subtitle} >
					Now let's start taking care of your plants.
				</Text>

				<View style={styles.footer} >
					<Button title='Start' />
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create(
	{
		container:
		{
			flex: 1,
			width: '100%',
			alignItems: 'center',
			justifyContent: 'space-around',
		},

		content:
		{
			flex: 1,
			width: '100%',
			alignItems: 'center',
			justifyContent: 'space-around',
			padding: 30,
		},

		emoji:
		{
			fontSize: 78,
		},

		title:
		{
			fontSize: 22,
			textAlign: 'center',
			color: colors.heading,
			fontFamily: fonts.heading,
			lineHeight: 38,
			marginTop: 15,
		},

		subtitle:
		{
			fontFamily: fonts.text,
			textAlign: 'center',
			fontSize: 17,
			paddingVertical: 10,
			color: colors.heading,
		},

		footer:
		{
			width: '100%',
			paddingHorizontal: 50,
			marginTop: 20,
		}
	}
)