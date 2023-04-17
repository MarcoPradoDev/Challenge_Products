import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageC from '../atoms/ImageC'
import { IProduct } from '../molecules/ProductItemC'
import TextC from '../atoms/TextC'

type Props = {
  product: IProduct
}

const ProductInfoC = ({ product }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_image}>
        <ImageC uri={product.image} width={200} height={200} />
      </View> 
      <View style={{gap: 20, marginBottom: 32}}>
        <TextC color='gray' size='body2' weight='bold'>Detalles del producto:</TextC>
        <TextC size='body1' weight='bold'>Comprado el {product.createdAt}</TextC>
        <TextC color='gray' size='body2' weight='bold'>Con esta compra acumulaste:</TextC>
      </View>
      <TextC size='h5' weight='bold' >{product.points} puntos</TextC>
    </View>
  )
}

export default ProductInfoC

const styles = StyleSheet.create({
  container: {
    marginBottom: 47
  },
  container_image: {
    backgroundColor: 'white',
    height: 350,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 10,
    marginBottom: 32
  }
})