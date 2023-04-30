import apiClient from '../apiClient'

interface User {
  id: number
  title: string
  price: number
  image_url: string
}

const findAll = async () => {
  const response = await apiClient.get<Array<User>>('/users')
  return response.data
}

const UsersService = {
  findAll,
}

export default UsersService
