import React, { useState } from 'react'
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function UserIdentification()
{
	const {navigate} = useNavigation()

	const [isFocused, setIsFocused] = useState(false)
	const [name, setName] = useState('')

	function handleSubmit()
	{
		navigate('Confirmation')
	}

	return (
		<SafeAreaView style={styles.container} >
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} >
					<View style={styles.content} >
						<View style={styles.form} >
							<View style={styles.header}>
								<Text style={styles.emoji} >
									{
										name !== ''
											? '😄'
											: '😃'
									}
								</Text>

								<Text style={styles.title} >
									How should we {'\n'}
									call you?
								</Text>
							</View>

							<TextInput
								style=
									{[
										styles.input,
										(isFocused || name !== '') && {borderColor: colors.green}
									]}
								placeholder='Type a name'
								onBlur={() => setIsFocused(false)}
								onFocus={() => setIsFocused(true)}
								onChangeText={input => setName(input)}
							/>

							<View style={styles.footer} >
								<Button
									title='Confirm'
									onPress={handleSubmit} 
								/>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
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
		},

		form:
		{
			flex: 1,
			justifyContent: 'center',
			paddingHorizontal: 54,
			alignItems: 'center',
		},

		header:
		{
			alignItems: 'center',
		},

		emoji:
		{
			fontSize: 44,
		},

		input:
		{
			borderBottomWidth: 1,
			borderColor: colors.gray,
			color: colors.heading,
			width: '100%',
			fontSize: 18,
			marginTop: 50,
			padding: 10,
			textAlign: 'center',
		},

		title:
		{
			fontSize: 24,
			lineHeight: 32,
			textAlign: 'center',
			color: colors.heading,
			fontFamily: fonts.heading,
			marginTop: 20,
		},

		footer:
		{
			marginTop: 40,
			width: '100%',
			paddingHorizontal: 20,
		}
	}
)