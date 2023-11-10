import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from '../components/LoginForm';
import Signup from '../components/SignupPage';
import Recipes from '../components/RecipesList';


function App() {
  const [token, setToken] = useState()
  const [currentUser, setCurrentUser] = useState(false)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Recipes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
