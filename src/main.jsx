import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './components/common/Spinner.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Spinner />
    <App />
  </StrictMode>,
)
