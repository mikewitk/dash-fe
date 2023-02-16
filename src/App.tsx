import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Root from './routes/Root'
import DashboardPage from './features/dashboard'
import SchedulesPage from './features/schedules/components'
import SettingsPage from './features/settings/components'
import TransactionsPage from './features/transactions/components'
import UsersPage from './features/users/components'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <DashboardPage />,
        },
        {
          path: '/dashboard',
          element: <DashboardPage />,
        },
        {
          path: '/transactions',
          element: <TransactionsPage />,
        },
        {
          path: '/schedules',
          element: <SchedulesPage />,
        },
        {
          path: '/users',
          element: <UsersPage />,
        },
        {
          path: '/settings',
          element: <SettingsPage />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
