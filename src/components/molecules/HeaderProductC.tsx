import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextC from '../atoms/TextC'

type Props = {
  nameProduct: string
}

const HeaderProductC = ({ nameProduct }: Props) => {
  return (
    <View style={styles.container}>
      <TextC weight='bold' size='h5'>{nameProduct}</TextC>
    </View>
  )
}

export default HeaderProductC

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CFD6FF',
    paddingHorizontal: 20,
    paddingVertical: 24
  }
})