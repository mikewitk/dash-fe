import { useQuery } from 'react-query'
import ProductsService from '../api/services/ProductsService'

export default function useGetAllProducts() {
  const { data, error, isLoading } = useQuery(['products'], async () => {
    return await ProductsService.findAll()
  })

  return {
    products: data,
    error,
    isLoading,
  }
}
