import { StyleSheet, Text, View, FlatList, ListRenderItem, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import React, { useMemo, useCallback } from 'react'
import ProductItemC, { IProduct } from '../molecules/ProductItemC'
import TextC from '../atoms/TextC'

type Props = {
  data: IProduct[],
  goDetail: (product: IProduct) => void, 
  refList: any
}
const HEIGHT = Dimensions.get('screen').height

const ProductListC = ({ data, goDetail, refList }: Props) => {

  const renderItem: ListRenderItem<IProduct> = ({ item }) => {
    return <ProductItemC info={item} onPress={(product: IProduct) => { goDetail(product) }} key={item.id} />
  }

  const memorizedValue = useMemo(() => renderItem, [data])

  return (
    <View>
      <TextC color='gray' weight='bold' size='body2'>TUS MOVIMIENTOS</TextC>
      <View style={{ height: 20 }} />
      <View style={styles.container_list}>
        {data.length == 0 && (
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextC weight='bold' size='body1'>Cargando...</TextC>
          </View>
        )}
        <FlatList
          ref={refList}
          renderItem={memorizedValue}
          initialNumToRender={5}
          keyExtractor={(item) => item.id}
          data={data}
          contentContainerStyle={{ gap: 8 }} />
      </View>
      <View style={{ height: 20 }} />
    </View>
  )
}

export default ProductListC

const styles = StyleSheet.create({
  container_list: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: HEIGHT * .44
  }
})