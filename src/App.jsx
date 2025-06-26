import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'

const App = () => {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState('login')

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  return (
    <div>
      {user && page === main && <h1>Main Page</h1>}

      {user === null
        <LoginForm 
          onLogin={(user) => 
            setUser(user)
            setPage('main')
          } 
        />
      }
    </div>
  )
}

export default App