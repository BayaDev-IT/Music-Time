import React from 'react'
import s from './Global.module.scss'
import MainPage from './Pages/MainPage/MainPage'
import PlayBar from './components/PlayBar/PlayBar'

const App = () => {
	return (
		<div className={s.wrapper}>
			<MainPage />
			<PlayBar />
		</div>
	)
}

export default App
