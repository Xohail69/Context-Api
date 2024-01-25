import UserContextProvider from "./context/UserContextProvider"
import Login from './components/Login'
import Profile from './components/Profile'
import './index.css'
import './App.css'
function App() {

  return (
    <UserContextProvider>
      <h1>Chaaye</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
