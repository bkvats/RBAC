import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import AccessBlocked from './pages/AccessBlocked.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/access-blocked' element={<AccessBlocked />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
