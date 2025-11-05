import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Author  from './pages/Author'
import City  from './pages/City'
import CampusHistory  from './pages/CampusHistory'
import DirectorsGallery  from './pages/DirectorsGallery'
import TimeLine from './pages/TimeLine'
import Gallery from './pages/Gallery'
import Works from './pages/Works'


export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/autor" element={<Author/>} />
        <Route path="/cidade-cajazeiras" element={<City/>} />
        <Route path="/historico-campus" element={<CampusHistory/>} />
        <Route path="/galeria-diretores" element={<DirectorsGallery/>} />
        <Route path="/linha-do-tempo" element={<TimeLine/>} />
        <Route path="/galeria" element={<Gallery/>} />
        <Route path="/obras" element={<Works/>} />
        <Route path="*" element={<h1>Pagina não encontrada</h1>} />
      </Routes>
  )
}
