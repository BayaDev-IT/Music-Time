import React, { useContext, useEffect, useState } from 'react'
import seondsToMMSS from '../../../utils/seondsToMMSS'
import { Slider } from '@mui/material'
import { AudioContext } from '../../../Context/AudioContext'

const TimeControls = () => {
	const { audio, currentTrack } = useContext(AudioContext)

	const [currentTime, setCurrentTime] = useState(0)
	const { duration } = currentTrack

	const formattedCurrentTime = seondsToMMSS(currentTime)
	const sliderCurrentTime = Math.round((currentTime / duration) * 100)

	const handleChangeCurrentTime = (_, value) => {
		const time = Math.round((value / 100) * duration)
		setCurrentTime(time)
		audio.currentTime = time
	}

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(audio.currentTime)
		}, 1000)

		return () => clearInterval(timer)
	}, [])
	return (
		<>
			<p>{formattedCurrentTime}</p>
			<Slider
				onChange={handleChangeCurrentTime}
				value={sliderCurrentTime}
				step={1}
				min={0}
				max={100}
			/>
		</>
	)
}

export default TimeControls
