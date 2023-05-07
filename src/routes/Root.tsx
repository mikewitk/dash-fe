import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import { Layout } from '../components/Layout/Layout'

export default function Root() {
  return <Layout sidebar={<Sidebar />} content={<Outlet />} />
}
