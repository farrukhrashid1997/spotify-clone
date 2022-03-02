import React from 'react'

export default function PlaylistButtons({ text, id }) {
  return (
    <p id={id} className="cursor-pointer hover:text-white">
      {text}
    </p>
  )
}
