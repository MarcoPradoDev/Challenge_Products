import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  children?: any,
  color?: 'black' | 'white' | 'gray' | 'green' | 'red',
  size: 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'button' | 'caption'
  weight?: 'normal' | 'bold'
}

const colors = {
  black: '#000000',
  gray: '#9B9898',
  white: '#FFFFFF',
  green: '#00B833',
  red: '#FF0000'
}

const weights = {
  bold: '800',
  normal: '400'
}

const sizes = {
  h4: 32,
  h5: 24,
  h6: 20,
  body1: 16,
  body2: 14,
  button: 16,
  caption: 12
}

const TextC = ({ children, color = 'black', size, weight ='normal' }: Props) => {

  return (
    <Text style={[{
      fontFamily: 'Avenir-Medium',
      color: colors[color],
      fontWeight: weights[weight] as any,
      fontSize: sizes[size],
      flexWrap: 'wrap',
    }]}>
      {children}
    </Text>
  )
}

export default TextC

const styles = StyleSheet.create({})