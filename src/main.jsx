import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shopcontextprovider from './context/Shopcontext.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Shopcontextprovider>
      <App />
    </Shopcontextprovider>
  </Provider>
)
