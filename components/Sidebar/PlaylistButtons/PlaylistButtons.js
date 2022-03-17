import React from 'react'

export default function PlaylistButtons({ text, id, onClick }) {
  return (
    <p id={id} className="cursor-pointer hover:text-white" onClick={onClick}>
      {text}
    </p>
  )
}
