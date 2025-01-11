import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavoritesProvider from './Context/FavoritesContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FavoritesProvider>
    <App />
    </FavoritesProvider>
  </BrowserRouter>,
)
