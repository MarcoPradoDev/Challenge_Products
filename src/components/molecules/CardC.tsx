import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextC from '../atoms/TextC'
import { useTheme } from '@react-navigation/native'

type Props = {
  points: string,
  month: string
}

const CardC = ({ points, month }: Props) => {
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <View style={[styles.container_card, { backgroundColor: colors.primary }]}>
        <View>
          <TextC size='body1' color='white' weight='bold'>{month}</TextC>
        </View>
        <View style={styles.container_points}>
          <TextC size='h4' color='white' weight='bold'>{`${points} pts`}</TextC>
        </View>
      </View>
    </View>
  )
}

export default CardC

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  container_card: {
    width: 286,
    height: 143,
    paddingHorizontal: 19,
    paddingVertical: 21,
    borderRadius: 20,
    elevation: 4
  },
  container_points: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})