import PageTest from './Testes/PageTest'
import './Style.css'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <main className='AppBody'>

      </main>
      <PageTest/>
      </BrowserRouter>
    </div>
  )
}

export default App
