import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import ForgetPasswordForm from './components/ForgetPasswordForm'
import Customer from './components/Customer'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error from './components/Error'
import Home from './components/Home'

const App = () => {
  const [user, setUser] = useState(null)

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
            <ForgetPasswordForm/>
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
        element={<Home />}
      />

      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App