import { Link } from 'react-router-dom'

const Sidebar = () => {
  const routes = ['dashboard', 'transactions', 'schedules', 'users', 'settings']

  return (
    <div className="w-40 flex h-full flex-col items-center overflow-hidden rounded bg-gray-900 text-gray-400">
      <div className="w-full px-2">
        {routes.map(route => (
          <div className="mt-3 flex w-full flex-col items-center">
            <Link
              to={`${route}`}
              className="h-12 mt-2 flex w-full items-center rounded px-3 capitalize hover:bg-gray-700 hover:text-gray-300"
            >
              {route}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

// sidebar ref: https://codepen.io/robstinson/pen/bGwpNMV
