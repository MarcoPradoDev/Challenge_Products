import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import TextC from '../atoms/TextC'

type Props = {
  onPress: any,
  children: JSX.Element | string,
  testID?: string
}

const ButtonC = ({ testID, onPress, children }: Props) => {

  const { colors } = useTheme()

  return (
    <TouchableOpacity testID={testID} onPress={onPress} style={[styles.button, { backgroundColor: colors.primary }]} >
      <TextC color='white' weight='bold' size='body1'>{children}</TextC>
    </TouchableOpacity>
  )
}

export default ButtonC

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    flex: 1,
    alignItems: 'center'
  }
})