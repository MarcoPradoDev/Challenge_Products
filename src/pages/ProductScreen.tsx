import { StyleSheet, View, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HeaderProductC from '../components/molecules/HeaderProductC'
import ProductInfoC from '../components/organisms/ProductInfoC'
import { IProduct } from '../components/molecules/ProductItemC'
import ButtonC from '../components/molecules/ButtonC'
import { MainStackNavigatorParamList } from '../stacks/MainStack'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

export type ProductScreenNavigationProp = NativeStackNavigationProp<
  MainStackNavigatorParamList,
  'Product'
>;

export type ProductScreenRouteProp = RouteProp<
  MainStackNavigatorParamList,
  'Product'
>;

const ProductScreen = () => {

  const navigation = useNavigation<ProductScreenNavigationProp>()
  const route = useRoute<ProductScreenRouteProp>()

  const [product, _] = useState<IProduct>(JSON.parse(route.params?.product))

  const backToList = () => {
    navigation.goBack()
  }

  return (
    <View>
      <StatusBar backgroundColor='#CFD6FF' />
      <HeaderProductC nameProduct={product.product} />
      <ScrollView contentContainerStyle={styles.container_scroll}>
        <ProductInfoC product={product} />
        <ButtonC onPress={backToList}>Aceptar</ButtonC>
      </ScrollView>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container_scroll: {
    padding: 20
  }
})