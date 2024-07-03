import WacaMap from './wacamap/WacaMap'
import CountryInfo from './wacamap/country-info/CountryInfo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoPage from './NoPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WacaMap />} />
        <Route path='/country/:name' element={<CountryInfo />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
