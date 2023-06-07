import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './components/Auth/Login/login'
import Home from './components/Home/home'
function App() {
	return (
		<div className='App'>
			<h1>Home page</h1>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='login' element={<LoginPage />} />
			</Routes>
		</div>
	)
}

export default App
