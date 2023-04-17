import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextC from '../atoms/TextC'

type Props = {
  fullname: string
}

const HeaderC = ({ fullname }: Props) => {
  return (
    <View style={styles.container}>
      <TextC weight='bold' size='h6'>Bienvenido de vuelta!</TextC>
      <TextC weight='normal' size='body1'>{fullname}</TextC>
    </View>
  )
}

export default HeaderC

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  }
})