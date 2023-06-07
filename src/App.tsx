import { Route, Routes } from 'react-router-dom'

import LoginPage from './components/Auth/Login/login'
import RegisterPage from './components/Auth/register/register'
import Home from './components/Home/home'
function App() {
	return (
		<div className='App'>
			<h1>Home page</h1>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='login' element={<LoginPage />} />
				<Route path='register' element={<RegisterPage />} />
			</Routes>
		</div>
	)
}

export default App
