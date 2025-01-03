import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserStorage } from './UserContext.tsx'
import NotFound from './NotFound/index.tsx'
import User from './User/User.tsx'
import HomeView from './Home/Index.tsx'
import LoginView from './Login/Index.tsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<HomeView />} />
              <Route path='/login/*' element={<LoginView />} />
              <Route path='/conta/*' element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
