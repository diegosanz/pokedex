import App from '@/components/App/App'
import '@/styles/index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

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
