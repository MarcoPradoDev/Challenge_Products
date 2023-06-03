import { IProduct } from "../../components/molecules/ProductItemC"
import { TYPE_LIST } from "../../components/organisms/BottomOptionC"

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
  static filterByType(products: IProduct[], type: TYPE_LIST): IProduct[] {
    switch (type) {
      case TYPE_LIST.REDEEMED:
        return products.filter(item => item.is_redemption == true)
      case TYPE_LIST.WON:
        return products.filter(item => item.is_redemption == false)
      default:
      case TYPE_LIST.ALL:
        return products
    }
  }

  filterByName(products: IProduct[], name: string): IProduct[] {
    return products.filter(item => item.product.toLowerCase().includes(name.toLowerCase()))
  }
}
