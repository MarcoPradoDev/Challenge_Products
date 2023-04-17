import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  children?: JSX.Element | string
}

const TitleC = ({ children }: Props) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default TitleC

const styles = StyleSheet.create({})