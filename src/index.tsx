import App from '@components/App/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'

const container = document.getElementById('root')

if (!container) {
  throw new Error('#root not found')
}

const root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
