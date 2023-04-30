import useGetAllProducts from '../../../hooks/useGetAllProducts'
import SummaryCards from './SummaryCards/SummaryCards'

const DashboardPage = () => {
  const { products, error, isLoading } = useGetAllProducts()
  console.log('products', products)
  console.log('error', error)
  console.log('isLoading', isLoading)

  if (isLoading) {
    return <div>Loading Products!!!!</div>
  }

  return (
    <div>
      <SummaryCards />
    </div>
  )
}

export default DashboardPage
