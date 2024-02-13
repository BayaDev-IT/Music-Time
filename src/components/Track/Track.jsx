import React, { useContext } from 'react'
import s from './Track.module.scss'
import { IconButton } from '@mui/material'
import { Pause, PlayArrow } from '@mui/icons-material'
import seondsToMMSS from '../../utils/seondsToMMSS'
import { AudioContext } from '../../Context/AudioContext'
import cn from 'classnames'

const Track = track => {
	const { id, preview, title, artists, duration } = track
	const { currentTrack, handleToggleAudio, isPlaying } =
		useContext(AudioContext)
	const isCurrentTrack = currentTrack.id === id

	const formattedDuration = seondsToMMSS(duration)
	return (
		<div className={cn(s.track, isCurrentTrack && s.playing)}>
			<IconButton onClick={() => handleToggleAudio(track)}>
				{isPlaying && isCurrentTrack ? <Pause /> : <PlayArrow />}
			</IconButton>
			<img src={preview} alt={title} className={s.preview} />
			<div className={s.credits}>
				<b>{title}</b>
				<p>{artists}</p>
			</div>
			<p>{formattedDuration}</p>
		</div>
	)
}

export default Track
