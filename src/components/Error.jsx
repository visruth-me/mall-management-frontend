import { useLocation } from 'react-router-dom'

const ErrorPage = () => {
  const location = useLocation()

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Something went wrong</h1>
      <p>We couldn't find the page at <code>{location.pathname}</code></p>
      <p>It might have been removed, renamed, or temporarily unavailable.</p>
    </div>
  )
}

export default ErrorPage
