import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import {createBrowserRouter} from "react-router-dom";
import {Route,RouterProvider,createRoutesFromElements}from 'react-router';

import Login from './pages/auth/Login.jsx';
import Sign from './pages/auth/Sign.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Sign/>} />
       </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
)
