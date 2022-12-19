import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import { Container } from '@mui/material'
import Menu from './components/Navbar'
export default function App() {    
  return (
    <BrowserRouter>
    <Menu />
      <Container>
        <Routes>
          <Route path="/" element={<Tasklist />} />
          <Route path="/tasks/new" element={<Taskform />} />
          <Route path="/tasks/:id/edit/" element={<Taskform />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
};
