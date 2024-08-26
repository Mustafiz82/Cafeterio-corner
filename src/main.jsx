import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </StrictMode>
    </AuthProvider>,
  </QueryClientProvider>,

)
