import useGetAllProducts from '../../../hooks/useGetAllProducts'

const DashboardPage = () => {
  const { products, error, isLoading } = useGetAllProducts()
  console.log('products', products)
  console.log('error', error)
  console.log('isLoading', isLoading)

  if (isLoading) {
    return <div>Loading Products!!!!</div>
  }

  return <div>Dashboard Page</div>
}

export default DashboardPage
