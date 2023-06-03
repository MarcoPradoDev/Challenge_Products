import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { IProduct } from '../components/molecules/ProductItemC'
import { Product } from '../utils/class/Product'

dayjs.locale('es')
const API_URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1/products'

export const useProducts = () => {
  const [products, setProducts] = useState<any[]>([])
  const [totalPoints, setTotalPoints] = useState('0')
  
  const fetchProducts = async () => {
    const response = await fetch(API_URL)
    if (response.status != 200)
      return []
    const data = await response.json()
    let total = 0
    const productsFormat: IProduct[] = data.map((item: any) => {
      const createdAt = dayjs(item.createdAt).format('DD of MMMM, YYYY').replace('of', 'de')
      const product = new Product(createdAt, item.product, item.points, item.image, item.is_redemption, item.id)
      total = total + (product.is_redemption == true ? -product.points : product.points)
      return product
    })
    setProducts(productsFormat)
    setTotalPoints(total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, totalPoints }

}