import Navbar from './common/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio'
import Transaction from './pages/Transactions';
import Statement from './pages/Statement';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/transactions' element={<Transaction />}></Route>
          <Route path='/statement' element={<Statement />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
