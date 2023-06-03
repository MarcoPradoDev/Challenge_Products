import React, { useState } from 'react'
import { IProduct } from '../components/molecules/ProductItemC'
import { ProductList } from '../utils/class/Product'
import { TYPE_LIST } from '../components/organisms/BottomOptionC'

export const useProductFilter = () => {

  const [filterName, setFilterName] = useState(TYPE_LIST.ALL)
  const [filterProducts, setFilterProducts] = useState<IProduct[]>([])

  const handleFilter = (products: IProduct[], type: TYPE_LIST) => {
    setFilterName(type)
    setFilterProducts(ProductList.filterByType(products, type))
  }

  return { filterName, filterProducts, handleFilter }

}