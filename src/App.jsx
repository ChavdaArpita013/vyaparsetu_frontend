import Navbar from './common/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio'
import Transaction from './pages/Transactions';
import Statement from './pages/Statement';
import Home from './pages/Home';
import Trending from './pages/Trending';
import MyAccount from './pages/MyAccount';
import ApexChart from './pages/ApexChart';

function App() { 

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} > </Route>
          <Route path='/stock/:stockName' element={<ApexChart />} ></Route>
          <Route path='/top' element={<Trending />}></Route>
          <Route path='/my-account' element={<MyAccount />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/transactions' element={<Transaction />}></Route>
          <Route path='/statement' element={<Statement />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
