import { StyleSheet, View, ScrollView, StatusBar } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import HeaderC from '../components/organisms/HeaderC'
import PointsC from '../components/organisms/PointsC'
import ProductListC from '../components/organisms/ProductListC'
import { IProduct } from '../components/molecules/ProductItemC'
import BottomOptionC, { typeList } from '../components/organisms/BottomOptionC'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { useNavigation } from '@react-navigation/native'
import { MainStackNavigatorParamList } from '../stacks/MainStack'

dayjs.locale('es')
const API_URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1/products'

class Product implements IProduct {
  createdAt: string
  product: string
  points: number
  image: string
  is_redemption: boolean
  id: string

  constructor(createdAt: string, product: string, points: number, image: string, is_redemption: boolean, id: string) {
    this.id = id
    this.product = product
    this.createdAt = createdAt
    this.points = points
    this.image = image
    this.is_redemption = is_redemption
  }
}

class ProductList {
  static filterByType(products: IProduct[], type: typeList): Product[] {
    switch (type) {
      case typeList.REDEEMED:
        return products.filter(item => item.is_redemption == true)
      case typeList.WON:
        return products.filter(item => item.is_redemption == false)
      default:
      case typeList.ALL:
        return products
    }
  }

  filterByName(products: IProduct[], name: string): Product[] {
    return products.filter(item => item.product.toLowerCase().includes(name.toLowerCase()))
  }
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackNavigatorParamList,
  'Home'
>;

const HomeScreen = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [copyProducts, setCopyProducts] = useState<IProduct[]>([])
  const [products, setProducts] = useState<IProduct[]>([])
  const [totalPoints, setTotalPoints] = useState('')
  const [typeFilter, setTypeFilter] = useState(typeList.ALL)

  const callApi = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    let total = 0
    const dProducts: IProduct[] = data.map((item: any) => {
      const createdAt = dayjs(item.createdAt).format('DD of MMMM, YYYY').replace('of', 'de')
      const product = new Product(createdAt, item.product, item.points, item.image, item.is_redemption, item.id)
      total = total + (product.is_redemption == true ? -product.points : product.points)
      return product
    })
    setTotalPoints(total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
    setCopyProducts(dProducts)
    setProducts(dProducts)
  }

  const getProducts = useCallback(() => ProductList.filterByType(copyProducts, typeFilter), [copyProducts, typeFilter])

  useEffect(() => {
    if (products.length == 0) {
      callApi();
    } else {
      const newProducts = getProducts()
      setProducts(_ => [...newProducts])
    }
  }, [typeFilter])

  const goDetail = (product: IProduct) => {
    navigation.navigate('Product', { product: JSON.stringify(product) })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F8F8F8' barStyle='dark-content' />
      <HeaderC fullname='Ruben Rodriguez' />
      <PointsC month='Diciembre' points={totalPoints} />
      <ProductListC goDetail={(product: IProduct) => { goDetail(product) }} data={products} />
      <BottomOptionC handleType={(filter: typeList) => { setTypeFilter(filter) }} />
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