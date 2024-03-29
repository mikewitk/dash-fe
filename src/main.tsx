import React from 'react'
import ReactDOM from 'react-dom/client'
import QueryProvider from './api/queryClient'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
)
