import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Topbar from '../components/Topbar/Topbar'

export default function Root() {
  return (
    <div className="flex h-screen w-screen items-center justify-start space-x-6 bg-gray-300 p-5">
      <Sidebar />
      <div className="h-full w-full ">
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}
