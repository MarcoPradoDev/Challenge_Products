import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardC from '../molecules/CardC'
import TitleC from '../atoms/TitleC'
import TextC from '../atoms/TextC'

type Props = {
  points: string,
  month: string
}

const PointsC = ({ points, month }: Props) => {
  return (
    <View style={{width: '100%'}}>
      <TextC color='gray' size='body2' weight='bold'>TUS PUNTOS</TextC>
      <CardC points={points} month={month} />
    </View>
  )
}

export default PointsC