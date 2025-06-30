import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown';
import Searchbar from './components/Searchbar';
import HeroSection from './components/HeroSection';
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import ForgetPasswordForm from './components/ForgetPasswordForm'
import Customer from './components/Customer'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error from './components/Error'

const App = () => {
  const [user, setUser] = useState(null)
  const [hovered, setHovered] = useState('');
  const [locked, setLocked] = useState('');
  const [search, setSearch] = useState('');

  const buttonSets = {
    shops: ['Dine', 'Beauty', 'Dress', 'Entertainment'],
    services: ['Cleaning', 'Parking', 'Wi-Fi'],
    events: ['Music Show', 'Art Fest', 'Tech Talk'],
    discounts: ['Coupons', 'Flash Sale', 'Festive Offers'],
    about: ['Our Story', 'Vision', 'Careers'],
    signin: ['Login', 'Sign Up'],
  };

  // const activeKey = locked || hovered;

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  return (
    <Routes>
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/home" replace />
          ) : (
            <LoginForm onLogin={setUser} />
          )
        }
      />
      <Route
        path="/signup"
        element={
          user ? (
            <Navigate to="/home" replace />
          ) : (
            <SignUpForm onSignupSuccess={setUser} />
          )
        }
      />
      <Route
        path="/forgotPassword"
        element={
          user ? (
            <Navigate to="/home" replace />
          ) : (
            <ForgetPasswordForm onReset={setUser} />
          )
        }
      />
      <Route
        path="/customer"
        element={
          <Customer />
        }
      />
      <Route
        path="/home"
        element={
          <div style={{ fontFamily: 'sans-serif', position: 'relative' }}>
            <Searchbar search={search} setSearch={setSearch} />
            <Navbar buttonSets={buttonSets} setHovered={setHovered} locked={locked} setLocked={setLocked}/>
            <Dropdown locked={locked} hovered={hovered} buttonSets={buttonSets} setHovered={setHovered} />
            <HeroSection />
          </div>
        }
      />

      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App