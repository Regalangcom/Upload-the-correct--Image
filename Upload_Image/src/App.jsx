import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbars from './components/Navbar'
import UploadImage from './components/Fom_uploadImage'
function App() {

  return (
    <>
      <div>
        <Routes>
            <Route path='/' element={<Navbars />} />
            <Route path='/upload' element={<UploadImage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
