import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home_page/home/Home'
import Login from './components/login_page/Login'
import Loginpage from './components/login_page/Loginpage'
import Forgot from './components/login_page/Forgot'
import Identify from './components/login_page/Identify'
import Resetpassword from './components/login_page/Resetpassword'
import Storiespage from './components/home_page/storiess/Storiespage'
import Signup from './components/login_page/Signup'
import Destination from './components/home_page/destination/Destination'
import Review from './components/home_page/review/Review.jsx'
import Reviewlayout from './components/home_page/review/Reviewlayout'
import Writereview from './components/home_page/review/Writereview'
import Vietnam from './components/detail/Vietnam.jsx'
import GlobalProvider from './context/index.jsx'
import Hanoi from './components/detail/Hanoi.jsx'

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='/login' element={<Loginpage />}>
          <Route path='' element={<Login />} />
          <Route path='/login/forgot' element={<Forgot />} />
          <Route path='/login/forgot/identify' element={<Identify />} />
          <Route path='/login/forgot/identify/resetpassword' element={<Resetpassword />} />
        </Route>
        <Route path='/stories' element={<Storiespage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/destination/vietnam' element={<Vietnam />} />
        <Route path='/destination/vietnam/hanoi' element={<Hanoi />} />
        <Route path='review' element={<Reviewlayout />}>
          <Route path='' element={<Review />} />
          <Route path='/review/writereview' element={<Writereview />} />
        </Route>
      </Routes>
    </GlobalProvider>
  )
}

export default App
