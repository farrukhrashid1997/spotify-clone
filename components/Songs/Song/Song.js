import React from 'react'
import useSpotify from '../../../hooks/useSpotify'
import { millisToMinutes } from '../../../lib/time'

export default function Song({ order, track }) {
  const spotifyApi = useSpotify()
  return (
    <div className="grid grid-cols-2 py-4 px-5 text-gray-500 hover:bg-gray-900">
      <div className="item-center flex cursor-pointer space-x-4 rounded-lg">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={track.track.album.images[0].url} />
        <div>
          <p className="lg:w- 64  w-36 truncate text-white">
            {track.track.name}
          </p>
          <p className="w-40">{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 md:inline">{track.track.album.name}</p>
        <p>{millisToMinutes(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}
