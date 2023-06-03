import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, FlatList } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HeaderC from '../components/organisms/HeaderC'
import PointsC from '../components/organisms/PointsC'
import ProductListC from '../components/organisms/ProductListC'
import { IProduct } from '../components/molecules/ProductItemC'
import BottomOptionC, { TYPE_LIST } from '../components/organisms/BottomOptionC'
import { useNavigation } from '@react-navigation/native'
import { MainStackNavigatorParamList } from '../stacks/MainStack'
import { useProducts } from '../hooks/useProducts'
import { useProductFilter } from '../hooks/useProductFilter'

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackNavigatorParamList,
  'Home'
>;

const HomeScreen = () => {

  const { products, totalPoints } = useProducts()
  const { filterName, filterProducts, handleFilter } = useProductFilter()
  const refList = useRef<FlatList>(null)

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goDetail = (product: IProduct) => {
    navigation.navigate('Product', { product: JSON.stringify(product) })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F8F8F8' barStyle='dark-content' />
      <HeaderC fullname='Ruben Rodriguez' />
      <PointsC month='Diciembre' points={totalPoints} />
      <ProductListC refList={refList} goDetail={(product: IProduct) => { goDetail(product) }} data={filterName == TYPE_LIST.ALL ? products : filterProducts} />
      <BottomOptionC nameFilter={filterName} handleFilter={(type) => {
        if (refList.current != null) {
          refList.current.scrollToIndex({ index: 0 })
        }
        handleFilter(products, type)
      }} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F8F8F8'
  }
})