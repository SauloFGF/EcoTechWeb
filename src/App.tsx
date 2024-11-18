import HomeView from './Home/index.tsx'
import LoginView from './Login/index.tsx'
import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main className='AppBody'>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/login/*' element={<LoginView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
