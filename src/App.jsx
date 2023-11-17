import { Toaster } from 'react-hot-toast'
import './App.css'

import MainLayout from './layouts/MainLayout';




const App = () => {
  return (
    <div>
    <Toaster/>
      <MainLayout/>
      
    </div>
  )
}

export default App