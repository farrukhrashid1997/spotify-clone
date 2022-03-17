import React from 'react'
import useSpotify from '../../../hooks/useSpotify'
import { millisToMinutes } from '../../../lib/time'

export default function Song({ order, track }) {
  const spotifyApi = useSpotify()
  return (
    <div className="grid grid-cols-2">
      <div className="item-center flex space-x-4">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={track.track.album.images[0].url} />
        <div>
          <p>{track.track.name}</p>
          <p>{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden md:inline">{track.track.album.name}</p>
        <p>{millisToMinutes(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}
