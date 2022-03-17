import React from 'react'
import { useRecoilValue } from 'recoil'
import Song from './Song'
import { playlistState } from '../../atoms/playlistAtom'

export default function Songs() {
  const playlist = useRecoilValue(playlistState)
  console.log(playlist?.tracks?.items)
  return (
    <div className="space- flex-col space-y-1 px-8 pb-20 text-white">
      {playlist?.tracks.items.map((track, i) => (
        <div className="text-white">
          <Song key={track.track.id} order={i} track={track} />
        </div>
      ))}
    </div>
  )
}
