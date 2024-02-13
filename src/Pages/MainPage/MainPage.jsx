import React, { useState } from 'react'
import s from './MainPage.module.scss'
import trackList from '../../assets/tracklist'
import Track from '../../components/Track/Track'
import { Input } from '@mui/material'

const MainPage = () => {
	const [tracks, setTracks] = useState(trackList)
	const handleChange = e => {
		const name = e.target.value
		if (!name || name.trim().length <= 0) {
			return setTracks(trackList)
		}

		const lowerCaseName = name.toLowerCase()
		return setTracks(
			tracks.filter(
				item =>
					item.title.toLowerCase().includes(lowerCaseName) ||
					item.artists.toLowerCase().includes(lowerCaseName)
			)
		)
	}
	return (
		<div className={s.search}>
			<Input
				className={s.input}
				placeholder='Поиск треков'
				onChange={handleChange}
			/>
			<div className={s.list}>
				{tracks.map(track => (
					<Track key={track.id} {...track} />
				))}
			</div>
		</div>
	)
}

export default MainPage
