import { createContext, useRef, useState } from 'react'

export const AudioContext = createContext({})

const AudioProvider = ({ children }) => {
	const [currentTrack, setCurrentTrack] = useState({})
	const [isPlaying, setPlaying] = useState(false)
	const audio = useRef(new Audio())

	const handleToggleAudio = track => {
		if (currentTrack.id !== track.id) {
			setCurrentTrack(track)
			setPlaying(true)

			audio.current.src = track.src
			audio.current.currentTime = 0
			audio.current.play()
			return
		}

		if (isPlaying) {
			setPlaying(false)
			audio.current.pause()
		} else {
			setPlaying(true)
			audio.current.play()
		}
	}

	const value = {
		audio: audio.current,
		currentTrack,
		isPlaying,
		handleToggleAudio,
	}

	return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider
