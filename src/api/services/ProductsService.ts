import apiClient from '../apiClient'

interface Product {
  id: number
  title: string
  price: number
  image_url: string
}

const findAll = async () => {
  const response = await apiClient.get<Array<Product>>('/products')
  return response.data
}

const ProductsService = {
  findAll,
}

export default ProductsService
