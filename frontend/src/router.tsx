import { Route, Routes } from 'react-router'
import Home from './pages/Home'

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<h1>Pagina não encontrada</h1>} />
      </Routes>
  )
}
