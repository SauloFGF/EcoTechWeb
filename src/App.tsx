import HomeView from './Home/index.tsx'
import LoginView from './Login/index.tsx'
import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserStorage } from './UserContext.tsx'
import Header from './Components/Header/inde.tsx'
import NotFound from './NotFound/index.tsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<HomeView />} />
              <Route path='/login/*' element={<LoginView />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
