import { Link } from 'react-router-dom'

const Sidebar = () => {
  const routes = ['dashboard', 'transactions', 'schedules', 'users', 'settings']

  return (
    <>
      <div className="flex-1">
        <ul className="flex content-center justify-between overflow-hidden sm:flex-col">
          {routes.map(route => (
            <li className="bg-gray-300 p-4">{route}</li>
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
