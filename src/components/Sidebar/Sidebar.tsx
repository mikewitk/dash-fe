import { Link } from 'react-router-dom'
import {
  AiOutlinePieChart,
  AiOutlineTags,
  AiOutlineCalendar,
  AiOutlineSetting,
} from 'react-icons/ai'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const routes = ['dashboard', 'transactions', 'schedules', 'users', 'settings']
  const location = useLocation()
  const { pathname } = location

  function getStyleByRoute(routePath: string) {
    const style = 'text-lg capitalize text-white'
    return pathname === `/${routePath}` ? style + ' font-bold' : style
  }

  return (
    <>
      <div className="flex-1">
        <h1 className="my-6 ml-5 text-4xl font-bold text-white">Dash.</h1>
        <ul className="flex content-center justify-between overflow-hidden sm:flex-col">
          {routes.map(route => (
            <Link to={`/${route}`} className="ml-4 flex items-center p-2">
              {getIconByName(route)}
              <p className={getStyleByRoute(route)}>{route}</p>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </>
  )
}

export default Sidebar

function getIconByName(iconName: string) {
  switch (iconName) {
    case 'dashboard':
      return <AiOutlinePieChart size={18} className="mr-4" color="white" />
    case 'transactions':
      return <AiOutlineTags size={18} className="mr-4" color="white" />
    case 'schedules':
      return <AiOutlineCalendar size={18} className="mr-4" color="white" />
    case 'users':
      return <HiOutlineUserCircle size={18} className="mr-4" color="white" />
    default:
      return <AiOutlineSetting size={18} className="mr-4" color="white" />
  }
}
