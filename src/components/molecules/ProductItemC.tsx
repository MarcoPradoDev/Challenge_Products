import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ImageC from '../atoms/ImageC'
import TextC from '../atoms/TextC'
import RightArrow from '../../assets/images/right-arrow.svg'

export interface IProduct {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
}

type Props = {
  info: IProduct,
  onPress: (product: IProduct) => void
}

const ProductItemC = ({ onPress, info }: Props) => {
  return (
    <TouchableOpacity testID='item-product' onPress={() => { onPress(info) }} style={[styles.container, styles.row]}>
      <View style={styles.container_image}>
        <ImageC uri={info.image} height={55} width={55} />
      </View>
      <View style={[styles.row, styles.container_info]}>
        <View style={[styles.container_left, styles.center]}>
          <TextC weight='bold' size='body2'>{info.product}</TextC>
          <TextC weight='normal' size='caption'>{info.createdAt}</TextC>
        </View>
        <View style={[styles.row, styles.container_right]}>
          <View style={styles.center}>
            <TextC weight='bold' size='body1'>
              <TextC weight='bold' size='body1' color={info.is_redemption ? 'red' : 'green'}>{info.is_redemption ? '-' : '+'}</TextC>
              {info.points}
            </TextC>
          </View>
          <View style={styles.center}>
            <RightArrow width={10} height={10} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductItemC

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  container_image: {
    padding: 5,
    backgroundColor: '#D0D0D0',
    borderRadius: 10
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  container_info: {
    flex: 1,
    justifyContent: 'space-between'
  },
  container_left: {
    gap: 7,
    flex: 1
  },
  container_right: {
    gap: 23
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
})