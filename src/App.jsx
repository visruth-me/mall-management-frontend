import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import ForgetPasswordForm from './components/ForgetPasswordForm'
import Customer from './components/Customer'

import AdminDashboard from './components/AdminDashboard'
import ReviewInquiries from './components/admin/ReviewInquiries'
import ViewFeedback from './components/admin/ViewFeedback'
import ViewShops from './components/admin/ViewShops'
import ApproveDiscount from './components/admin/ApproveDiscount'
import ServiceStatus from './components/admin/ServiceStatus'

import TenantDashboard from './components/TenantDashboard'
import PlaceDiscountRequest from './components/tenants/PlaceDiscountRequest'
import PlaceInquiry from './components/tenants/PlaceInquiry'
import ViewShopFeedback from './components/tenants/ViewShopFeedbacks'

import { Routes, Route, Navigate } from 'react-router-dom'
import Error from './components/Error'
import Home from './components/Home'

const App = () => {
  const [user, setUser] = useState(null)

  // const activeKey = locked || hovered;
  useEffect(() => {
    const saved = localStorage.getItem('loggedUser')
    if (saved) {
      setUser(JSON.parse(saved))
    }
  }, [])

  const RequireAuth = ({ children }) =>
    user ? children : <Navigate to="/login" replace />

  const RequireRole = (role, children) =>
    user?.type === role ? children : <Navigate to="/" replace />

  return (
    <Routes>
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/" replace />
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
          <RequireAuth>
            {RequireRole('customer', <Customer />)}
          </RequireAuth>
        }
      />
      <Route
        path="/admin"
        element={
          <RequireAuth>
            {RequireRole('admin', <AdminDashboard />)}
          </RequireAuth>
        }
      />
      <Route
        path="/tenant"
        element={
          <RequireAuth>
            {RequireRole('tenant', <TenantDashboard />)}
          </RequireAuth>
        }
      />
      <Route
        path="/ReviewInquiries"
        element={
          <ReviewInquiries />
        }
      />
      <Route
        path="/ViewFeedback"
        element={
          <ViewFeedback />
        }
      />
      <Route
        path="/ViewShops"
        element={
          <ViewShops />
        }
      />
      <Route
        path="/ApproveDiscount"
        element={
          <ApproveDiscount />
        }
      />
      <Route
        path="/ServiceStatus"
        element={
          <ServiceStatus />
        }
      />
      <Route
        path="/PlaceDiscountRequest"
        element={
          <PlaceDiscountRequest />
        }
      />
      <Route
        path="/PlaceInquiry"
        element={
          <PlaceInquiry />
        }
      />
      <Route
        path="/ViewShopFeedback"
        element={
          <ViewShopFeedback />
        }
      />
      <Route
        path="/"
        element={<Home user={user} setUser={setUser}/>}
      />

      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App