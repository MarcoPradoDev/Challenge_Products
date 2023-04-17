import { IProduct } from "../../components/molecules/ProductItemC"
import { typeList } from "../../components/organisms/BottomOptionC"

export class Product implements IProduct {
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

export class ProductList {
  static filterByType(products: IProduct[], type: typeList): IProduct[] {
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

  filterByName(products: IProduct[], name: string): IProduct[] {
    return products.filter(item => item.product.toLowerCase().includes(name.toLowerCase()))
  }
}
