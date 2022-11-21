import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import { GlobalStyle } from './assets/styles/global'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
